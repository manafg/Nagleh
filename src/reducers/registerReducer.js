
import {SUCCESS_REGISTER , FAIL_REGISTER} from '../actions/Reg/registreTypes';
const initialState = {
    token: null,
    error: null
};

const postReducer = function post(state = initialState , action) {
    switch(action.type) {
        
        case SUCCESS_REGISTER: 
        return {
            ...state,
            token: action.payLoad
        }
    case FAIL_REGISTER :{
        return{
            ...state,
            error: action.payLoad.response.data.error?.message
        }
    }
    default:
        return state;
    }
}

export default postReducer