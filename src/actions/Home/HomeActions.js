import {UPDATE_DROP , UPDATE_FROM , UPDATE_STEP , 
    FARE_FAILED, FARE_SUCCESS ,
    SELECT_TYPE, REQUEST_FARE, REQUEST_TRIP, REQUEST_TRIP_FAIL ,REQUEST_TRIP_SUCCESS} from './HomeActionTypes';

export function requestUpdateDrop(data){
    return {
        type:UPDATE_DROP,
        payLoad:data
    }
}

export function requestUpdateFrom(data){
    return {
        type:UPDATE_FROM,
        payLoad:data
    }
}



export function requestUpdateStep(data){
    return {
        type: UPDATE_STEP,
        payLoad:data
    }
}

export function requestSelectType(data){
    return {
        type: SELECT_TYPE,
        payLoad:data
    }
}

export function successFare(data){
    return {
        type: FARE_SUCCESS,
        payLoad:data
    }
}

export function failedFare(data) {
    return {
        type : FARE_FAILED,
        payLoad:data
    }
}

export function requestFare(data){
    return {
        type: REQUEST_FARE,
        payLoad:data
    }
}

export function successTrip(data){
    return {
        type: REQUEST_TRIP_SUCCESS,
        payLoad:data
    }
}

export function failedTrip(data) {
    return {
        type : REQUEST_TRIP_FAIL ,
        payLoad:data
    }
}

export function requestTrip(data){
    return {
        type: REQUEST_TRIP,
        payLoad:data
    }
}


 