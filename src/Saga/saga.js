import { takeLatest ,take, put, call, takeEvery } from 'redux-saga/effects';
import { RegisterApi } from '../client/RegApi';
import {REQUEST_REGISTER} from '../actions/Reg/registreTypes'
import {successRegister, failRegister} from '../actions/Reg/registerAction'

function* registerSaga(action){
    try {
        const data = yield call(RegisterApi,action.payLoad)
        yield put(successRegister(data));
    } catch (err){
        debugger
        yield put(failRegister(err));
    }
}

export const sagas = [
        takeEvery(REQUEST_REGISTER,registerSaga),
]