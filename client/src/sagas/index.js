import { all } from 'redux-saga/effects'
import { watchSpots } from './spots'
import { watchRotations } from './rotations'

export default function* rootSaga(){
	yield all([
		watchRotations(),
		watchSpots()
	])
}