import {takeEvery,takeLatest,put,call} from 'redux-saga/effects';
import {delay} from '../utils';
import * as types from '../store/action-types';


function* incrementAsync(){
    yield call(delay,1000)
    yield put({type:types.INCREMENT})
}

export function* watchIncrement(){
    //takeEvery 会监控types.INCREMENT_ASYNC,当触发这个 type 后会执行第二个参数方法 incrementAsync
    yield takeEvery(types.INCREMENT_SAGA,incrementAsync)
    //yield takeLatest(types.INCREMENT_SAGA,incrementAsync)
}