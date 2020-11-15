
import {combineReducers} from 'redux';
import registerReducer from './registerReducer';
import lgoinReducer from './loginReducer';
import OTPReducer from './OTPReducer';
import homeReducer from './HomeReducer';

export default combineReducers({
    registerReducer : registerReducer,
    lgoinReducer: lgoinReducer,
    OTPReducer: OTPReducer,
    homeReducer: homeReducer
})