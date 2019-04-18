import moment from 'moment'
import { GET_SPOTS_SUCCESS } from '../actionTypes'

export default (state = {all:[]}, action) => {
  switch (action.type) {
	 case GET_SPOTS_SUCCESS:
		return { ...state, all:action.response.data.response.spots }

   default:
    return state
   }
 }