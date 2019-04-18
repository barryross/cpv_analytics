import { createSelector } from 'reselect'
import moment from 'moment'
import _ from 'lodash'
const getRotations = (state) => state.rotations
const getSpots = (state) => state.spots
var format = 'hh:mm A'


// Distills the data into exactly what we want to feed into the table 
export const combinedRotationsAndSpots = createSelector(
  [ getRotations, getSpots ],
  (rotations, spots) => {
		return spots.map(spot => {
			let rotation = rotations.filter(rotation => {
				return moment(spot.Time, format).isBetween(moment(rotation.Start, format), moment(rotation.End, format))
			})
			// console.log("rotation found", rotation)
			spot.Rotation = rotation[0] ? rotation[0].Name : null
			spot.CPV = (spot.Spend/spot.Views).toFixed(2)	
			return spot
		})
  }
)

export const combinedRotationsAndSpotsReduced = createSelector(
  [ getRotations, getSpots ],
  (rotations, spots) => {
		let initial =  spots.map(spot => {
			let rotation = rotations.filter(rotation => {
				return moment(spot.Time, format).isBetween(moment(rotation.Start, format), moment(rotation.End, format))
			})
			spot.Rotation = rotation[0] ? rotation[0].Name : null
			spot.Spend = parseFloat(spot.Spend)
			spot.Views = parseInt(spot.Views)
			return spot
		})

		if(initial.length){
	
			let groups = _.groupBy(initial, function(item) {
				return `${item.Creative} - ${item.Date} - ${item.Rotation}`;
			});

			let reduced = _.map(groups, (group) => {
				return _.reduce(group, (a,b)=>{
					return {...b, 
						Views: a.Views + b.Views, 
						Spend: a.Spend + b.Spend
					};
				})

			})
			console.log("reduced", reduced)
			return reduced.map(obj => {
				obj.CPV = (obj.Spend/obj.Views).toFixed(2)
				return obj
			})
			}
  }
)