import {UPDATE_FROM , UPDATE_DROP, UPDATE_STEP , SELECT_TYPE , FARE_SUCCESS , FARE_FAILED , REQUEST_TRIP_FAIL , REQUEST_TRIP_SUCCESS} from '../actions/Home/HomeActionTypes';

const initialState = {
    droplatitude: 0,
    droplongitude: 0,
    droptext: "Drop Location",
    whereText: "Pick Up Location ",
    wherelatitude: 0,
    wherelongitude: 0,
    step:0,
    truckType: 'S',
    truck: {},
    fare : {},
    requestId: 0
};

const homeReducer = function post(state = initialState , action) {
    switch(action.type) {
        case UPDATE_DROP: 
        return {
            ...state,
            droplatitude: action.payLoad.geometry.location.lat,
            droplongitude: action.payLoad.geometry.location.lng,
            droptext: action.payLoad.formatted_address,
           
        }
        case UPDATE_FROM :{
            return{
                ...state,
                wherelongitude: action.payLoad.geometry.location.lng,
                wherelatitude: action.payLoad.geometry.location.lat,
                whereText: action.payLoad.formatted_address
            }
        }
        case UPDATE_STEP : {
            return {
                ...state,
                step : action.payLoad
            }
        }
        case SELECT_TYPE : {
            return {
                ...state,
                truckType : action.payLoad.Type,
                truck : action.payLoad,
                step: 2
            }
        }
        case FARE_SUCCESS :{
            return {
                ...state,
                step: 3,
                fare:action.payLoad.data
            }
        }
        case FARE_FAILED :{
            return{
                ...state,
                error: action.payLoad.response.data.error?.message
            }
        }
        case REQUEST_TRIP_SUCCESS :{
            return{
                ...state,
                requestId: action.payLoad.data.requestId,
                step : 4
            }
        }
        case REQUEST_TRIP_FAIL :{
            return{
                ...state,
                error: action.payLoad.response.data.error?.message
            }
        }
    default:
        return state;
    }
}

export default homeReducer;