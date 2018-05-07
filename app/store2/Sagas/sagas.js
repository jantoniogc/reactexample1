import { call, put, takeEvery, select } from 'redux-saga/effects';
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
    profile_picture: values.secure_url
  });
};

const registroFotoCloudary = ({ imagen }) => {
  const foto = {
    uri: imagen.uri,
    type: imagen.type,
    name: imagen.fileName
  };
  console.log(foto);
  const formImagen = new FormData();
  formImagen.append('upload_preset', Constantes.CLOUDINARY_PRESET);
  formImagen.append('file', foto);

  return fetch(Constantes.CLOUDINARY_NAME, {
    method: 'POST',
    body: formImagen
  })
    .then(response => response.json());
};
// REGITRO actions
function* sagaRegistro(action) {
  try {
    const imagen = yield select(state => state.reducerImagenSignUp);
    const urlFoto = yield call(registroFotoCloudary, imagen.imagen);
    console.log(urlFoto.secure_url);
    const userRegister = yield call(registroEnFirebase, action.datos);
    const { email, uid } = userRegister;
    const { secure_url } = urlFoto;
    const { datos: { nombre } } = action;
    yield call(registroEnBaseDeDatos, {
      uid, email, nombre, secure_url
    });
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
