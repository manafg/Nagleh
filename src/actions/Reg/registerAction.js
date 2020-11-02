import {SUCCESS_REGISTER, REQUEST_REGISTER,FAIL_REGISTER} from './registreTypes';

export function requestRegister(data){
    return {
        type:REQUEST_REGISTER,
        payLoad:data
    }
}

export function successRegister(data){
    return {
        type:SUCCESS_REGISTER,
        payLoad:data
    }
}

export function failRegister(data){
    return {
        type:FAIL_REGISTER,
        payLoad:data
    }
}

 