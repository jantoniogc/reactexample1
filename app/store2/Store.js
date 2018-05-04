
// import { Platform } from 'react-native';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { reducer as form } from 'redux-form';
import { Platform } from 'react-native';
import createSagaMiddleware from 'redux-saga';
import registrar from './Sagas/sagas';
import Constantes from './constantes';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise';
import devTools from 'remote-redux-devtools';



const AUMENTAR_REDUCER_PRUEBA = 'AUMENTAR_REDUCER_PRUEBA';

const reducerPrueba = (state = [0], action) => {
  switch (action.type) {
    case AUMENTAR_REDUCER_PRUEBA:
      return [...state, 1];
    default:
      return state;
  }
};

const reducerSession = (state = null, action) => {
  switch (action.type) {
    case Constantes.ESTABLECER_SESSION:
      return action.usuario;
    case Constantes.CERRAR_SESSION:
      return null;
    default:
      return state;
  }
};

const reducerImagenSignUp = (state = { imagen: null }, action) => {
  switch (action.type) {
    case Constantes.CARGAR_IMAGEN_SINGUP:
      return { imagen: action.imagen };
    case Constantes.LIMPIAR_IMAGEN_SINGUP:
      return { imagen: null };
    default:
      return state;
  }
};

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  reducerPrueba,
  reducerSession,
  reducerImagenSignUp,
  form
});


const enhancer = compose(
  applyMiddleware(sagaMiddleware, thunk, promise, logger),
  devTools({
    name: Platform.OS,
    hostname: 'localhost',
    port: 5678
  })
);

const store = createStore(reducers, enhancer);

sagaMiddleware.run(registrar);

export default store;
