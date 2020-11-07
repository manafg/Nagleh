import { takeLatest ,take, put, call, takeEvery } from 'redux-saga/effects';
import { RegisterApi } from '../client/RegApi';
import { LoginApi } from '../client/LoginApi';
import { OTPApi } from '../client/OTP';

import {REQUEST_REGISTER} from '../actions/Reg/registreTypes';
import {REQUEST_LOGIN} from '../actions/Login/LoginTypes';
import { REQUEST_OTP } from '../actions/OTP/OTPTypes'

import {successRegister, failRegister} from '../actions/Reg/registerAction';
import {successLogin, failLogin} from '../actions/Login/LoginActions';
import {successOTP , failOTP} from '../actions/OTP/OTPActions'



function* registerSaga(action){
    try {
        const data = yield call(RegisterApi,action.payLoad)
        yield put(successRegister(data));
    } catch (err){
        yield put(failRegister(err));
    }
}

function* loginSaga(action){
    try {
        const data = yield call(LoginApi,action.payLoad)
        yield put(successLogin(data));
    } catch (err){
        yield put(failLogin(err));
    }
}

function* OTPSaga(action){
    try {
        const data = yield call(OTPApi,action.payLoad)
        yield put(successOTP(data));
    } catch (err){
        yield put(failOTP(err));
    }
}

export const sagas = [
        takeEvery(REQUEST_REGISTER,registerSaga),
        takeEvery(REQUEST_LOGIN,loginSaga),
        takeEvery(REQUEST_OTP,OTPSaga)
]