import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import createMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootSaga from '../sagas';

let sagaMiddleware = createMiddleware();
let initState = {number:10};
let store = createStore(reducer,initState,applyMiddleware(sagaMiddleware,thunk));
// Sage 内置 co 库，run 会把所有执行完
sagaMiddleware.run(rootSaga);


export default store;