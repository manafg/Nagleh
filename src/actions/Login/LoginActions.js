import {REQUEST_LOGIN, SUCCESS_LOGIN,FAIL_LOGIN} from './LoginTypes';

export function requestLogin(data){
    return {
        type:REQUEST_LOGIN,
        payLoad:data
    }
}

export function successLogin(data){
    return {
        type:SUCCESS_LOGIN,
        payLoad:data
    }
}

export function failLogin(data){
    return {
        type:FAIL_LOGIN,
        payLoad:data
    }
}

 