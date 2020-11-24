
import {SUCCESS_LOGIN , FAIL_LOGIN} from '../actions/Login/LoginTypes';
const initialState = {
    token: null,
    error: null
};

const lgoinReducer = function post(state = initialState , action) {
    switch(action.type) {
        
        case SUCCESS_LOGIN: 
        debugger
        return {
            ...state,
            token: action.payLoad
        }
    case FAIL_LOGIN :{
        return{
            ...state,
            error: action.payLoad.response.data.error?.message
        }
    }
    default:
        return state;
    }
}

export default lgoinReducer