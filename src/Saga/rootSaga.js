import { all, fork } from 'redux-saga/effects';
import {sagas} from './saga'

export default function* rootSaga(){
    yield all([
        ...sagas
    ])
}