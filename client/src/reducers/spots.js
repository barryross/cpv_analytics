import { GET_SPOTS_SUCCESS } from '../actionTypes'

export default (state = [], action) => {
  switch (action.type) {
	 case GET_SPOTS_SUCCESS:
		return [...action.data]

   default:
    return state
   }
 }