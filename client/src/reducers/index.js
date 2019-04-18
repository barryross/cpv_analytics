import { combineReducers } from 'redux';

import rotations from './rotations'
import spots from './spots'

const rootReducer = (history) => combineReducers({
	rotations,
	spots

});

export default rootReducer;