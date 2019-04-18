import { createSelector } from 'reselect'
import moment from 'moment'
const getRotations = (state) => state.rotations
const getSpots = (state) => state.spots
var format = 'hh:mm A'

export const combinedRotationsAndSpots = createSelector(
  [ getRotations, getSpots ],
  (rotations, spots) => {
		return spots.map(spot => {
			let rotation = rotations.filter(rotation => {
				return moment(spot.Time, format).isBetween(moment(rotation.Start, format), moment(rotation.End, format))
			})
			console.log("rotation found", rotation)
			spot.Rotation = rotation[0] ? rotation[0].Name : null
			spot.CPV = (spot.Spend/spot.Views).toFixed(2)	
			return spot
		})
  }
)