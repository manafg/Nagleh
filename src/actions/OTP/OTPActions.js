import {SUCCESS_OTP, REQUEST_OTP,FAIL_OTP} from './OTPTypes';

export function requestOTP(data){
    return {
        type:REQUEST_OTP,
        payLoad:data
    }
}

export function successOTP(data){
    return {
        type:SUCCESS_OTP,
        payLoad:data
    }
}

export function failOTP(data){
    return {
        type:FAIL_OTP,
        payLoad:data
    }
}

 