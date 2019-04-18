import moment from 'moment'
import { GET_ROTATIONS_SUCCESS } from '../actionTypes'

export default (state = {all:[]}, action) => {
  switch (action.type) {
	 case GET_ROTATIONS_SUCCESS:
	 return { ...state, all:action.data }
   default:
    return state
   }
 }