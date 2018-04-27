import { call, put, takeEvery } from 'redux-saga/effects';
import { autenticacion, baseDeDatos } from '../Servicios/firebase';

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

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* registrarUsuario(action) {
  try {
    const userRegister = yield call(registroEnFirebase, action.datos);
    const { email, uid } = userRegister;
    const { datos: { nombre } } = action;
    yield call(registroEnBaseDeDatos, { uid, email, nombre });
  } catch (e) {
    console.log(e);
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* registrar() {
  yield takeEvery('REGISTRO', registrarUsuario);
}

export default registrar;
