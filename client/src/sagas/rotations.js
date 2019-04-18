import {LOADING, GET_ROTATIONS, GET_ROTATIONS_SUCCESS, GET_ROTATIONS_ERROR} from '../actionTypes'
import { put, takeEvery, call } from 'redux-saga/effects'
import Api from '../services/api'

 function* workerGetRotations(data){
	yield put({ type: LOADING, data:true}); 
	const response = yield call(Api.fetchRotations)
	try{
		yield put({ type: GET_ROTATIONS_SUCCESS}); 
	}catch(error){
		yield put({ type: GET_ROTATIONS_ERROR, error}); 

	}
	yield put({ type: LOADING, data:false});

}

export function* watchRotations
(){
	yield takeEvery(GET_ROTATIONS, workerGetRotations)
}