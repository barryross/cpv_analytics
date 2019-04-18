import {LOADING, GET_SPOTS, GET_SPOTS_SUCCESS, GET_SPOTS_ERROR} from '../actionTypes'
import { put, takeEvery, call } from 'redux-saga/effects'
import Api from '../services/api'

 function* workerGetSpots(data){
	yield put({ type: LOADING, data:true}); 
		try {
			const response = yield call(Api.fetchSpots)
			yield put({ type: GET_SPOTS_SUCCESS, data:response.data.spots}); 
		}catch(err){
			yield put({ type: GET_SPOTS_ERROR, err}); 

		}
	yield put({ type: LOADING, data:false});

}

export function* watchSpots
(){
	yield takeEvery(GET_SPOTS, workerGetSpots)
}