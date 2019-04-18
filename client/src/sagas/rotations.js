import {LOADING, GET_ROTATIONS, GET_ROTATIONS_SUCCESS, GET_ROTATIONS_ERROR} from '../actionTypes'
import { put, takeEvery, call } from 'redux-saga/effects'
import Api from '../services/api'


function* workerGetRotations(){
	yield put({ type: LOADING, data:true}); 
		try {
			const response = yield call(Api.fetchRotations)
			yield put({ type: GET_ROTATIONS_SUCCESS, data:response.data.rotations}); 
		}catch(err){
			yield put({ type: GET_ROTATIONS_ERROR, err});

		}
	yield put({ type: LOADING, data:false});

}

export function* watchRotations
(){
	yield takeEvery(GET_ROTATIONS, workerGetRotations)
}