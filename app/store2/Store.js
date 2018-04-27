
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import registrar from './Sagas/sagas';

const AUMENTAR_REDUCER_PRUEBA = 'AUMENTAR_REDUCER_PRUEBA';

const reducerPrueba = (state = [0], action) => {
  switch (action.type) {
    case AUMENTAR_REDUCER_PRUEBA:
      return [...state, 1];
    default:
      return state;
  }
};

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  reducerPrueba,
  form
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(registrar);

export default store;
