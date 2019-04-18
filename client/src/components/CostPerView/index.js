import React, {Component} from 'react'

class CostPerView extends Component {

	componentDidMount = () => {
		this.props.getSpots()
	}
	render(){
		return(
			<h1>hi</h1>
		)
	}
}


export default CostPerView