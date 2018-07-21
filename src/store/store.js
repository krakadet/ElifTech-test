import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer/index';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootSaga from '../reducer/sagas/sagas'
import {composeWithDevTools} from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware, logger));

const store = createStore(reducer, enhancer);

//dev only

window.store = store;
sagaMiddleware.run(rootSaga);
export default store