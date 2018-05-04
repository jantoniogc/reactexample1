import { call, put, takeEvery } from 'redux-saga/effects';
import { autenticacion, baseDeDatos } from '../Servicios/firebase';
import Constantes from '../constantes';

const registroEnFirebase = values =>
  autenticacion
    .createUserWithEmailAndPassword(values.correo, values.password)
    .then(success => success.toJSON());

const registroEnBaseDeDatos = (values) => {
  baseDeDatos.ref(`usuarios/${values.uid}`).set({
    username: values.nombre,
    email: values.email,
  });
};

// REGITRO actions
function* sagaRegistro(action) {
  try {
    const userRegister = yield call(registroEnFirebase, action.datos);
    const { email, uid } = userRegister;
    const { datos: { nombre } } = action;
    yield call(registroEnBaseDeDatos, { uid, email, nombre });
  } catch (e) {
    console.log(e);
  }
}

const loginEnFireBase = values => autenticacion
  .signInWithEmailAndPassword(values.correo, values.password)
  .then(success => success.toJSON());

// LOGIN actions
function* sagaLogin(action) {
  try {
    const loginResponse = yield call(loginEnFireBase, action.datos);
    console.log(loginResponse);
  } catch (e) {
    console.log(e);
  }
}
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* registrar() {
  yield takeEvery(Constantes.REGISTRO, sagaRegistro);
  yield takeEvery(Constantes.LOGIN, sagaLogin);
}

export default registrar;
