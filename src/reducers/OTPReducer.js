
import {SUCCESS_OTP , FAIL_OTP} from '../actions/OTP/OTPTypes';
const initialState = {
    token: null,
    error: null
};

const OTPReducer = function post(state = initialState , action) {
    switch(action.type) {
        
        case SUCCESS_OTP: 
        debugger
        return {
            ...state,
            token: action.payLoad
        }
    case FAIL_OTP :{
        return{
            ...state,
            error: action.payLoad.response.data.error.message
        }
    }
    default:
        return state;
    }
}

export default OTPReducer