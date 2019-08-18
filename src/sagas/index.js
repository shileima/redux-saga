import {all} from 'redux-saga/effects';
import {helloSaga} from './helloSaga';
import {watchIncrement} from './watchIncrement';

export default function* rootSaga(){
    yield all([
        helloSaga(),
        watchIncrement()
    ])
}