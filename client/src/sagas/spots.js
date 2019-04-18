import {LOADING, GET_SPOTS, GET_SPOTS_SUCCESS, GET_SPOTS_ERROR} from '../actionTypes'
import { put, takeEvery, call } from 'redux-saga/effects'
import Api from '../services/api'

 function* workerGetSpots(data){
	yield put({ type: LOADING, data:true}); 
	const response = yield call(Api.fetchSpots)
	console.log("RESPONSE", response)
	try{
		yield put({ type: GET_SPOTS_SUCCESS}); // Works for all three different rovers
	}catch(error){
		yield put({ type: GET_SPOTS_ERROR, error}); // Works for all three different rovers

	}
	yield put({ type: LOADING, data:false});

}

export function* watchSpots
(){
	yield takeEvery(GET_SPOTS, workerGetSpots)
}