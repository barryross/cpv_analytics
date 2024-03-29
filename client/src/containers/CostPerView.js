import { connect } from 'react-redux';
import CostPerView from '../components/CostPerView/'
import { getSpots, getRotations} from '../actions'
import { combinedRotationsAndSpots, combinedRotationsAndSpotsReduced } from '../selectors'


const mapStateToProps = (state, ownProps) => {
    return {	
			data: combinedRotationsAndSpots(state),
			dataReduced: combinedRotationsAndSpotsReduced(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
			getSpots: () => {
				dispatch(getSpots())
			},
			getRotations: () => {
				dispatch(getRotations())
			}
		}
}

export default connect(mapStateToProps, mapDispatchToProps)(CostPerView);
