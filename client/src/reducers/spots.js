import { GET_SPOTS_SUCCESS } from '../actionTypes'

export default (state = {all:[]}, action) => {
  switch (action.type) {
	 case GET_SPOTS_SUCCESS:
		return { ...state, all:action.data }

   default:
    return state
   }
 }