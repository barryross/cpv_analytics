import moment from 'moment'
import { GET_ROTATIONS_SUCCESS } from '../actionTypes'

export default (state = [], action) => {
  switch (action.type) {
	 case GET_ROTATIONS_SUCCESS:
	 return [...action.data]
   default:
    return state
   }
 }