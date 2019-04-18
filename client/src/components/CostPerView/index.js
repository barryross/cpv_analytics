import React, {Component} from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class CostPerView extends Component {

	componentDidMount = () => {
		this.props.getSpots()
		this.props.getRotations()
	}

	render() {
		const { data } = this.props
		const { dataReduced } = this.props
	
		const columns = [{
			Header: 'Creative',
			accessor: 'Creative' // String-based value accessors!
		}, 
		{
			Header: 'Date',
			accessor: 'Date',
		},
		{
			Header: 'Rotation',
			accessor: 'Rotation',	
		},
		{
			Header: 'Time',
			accessor: 'Time',
		},
		{
			Header: 'CPV',
			accessor: 'CPV',
			Cell: props => <span className='number'>${props.value}</span> // Custom cell components!

		},
		{
			Header: 'Spend',
			accessor: 'Spend',
			Cell: props => <span className='number'>${props.value}</span> // Custom cell components!
		},
		{
			Header: 'Views',
			accessor: 'Views',
		}
	]

		const columnsReduced = [{
			Header: 'Creative',
			accessor: 'Creative' // String-based value accessors!
		}, 
		{
			Header: 'Date',
			accessor: 'Date',
		},
		{
			Header: 'Rotation',
			accessor: 'Rotation',	
		},
		{
			Header: 'CPV',
			accessor: 'CPV',
			Cell: props => <span className='number'>${props.value}</span> // Custom cell components!

		},
		]
		return (
			<section>
					<ReactTable
						defaultPageSize={10}
						data={data}
						columns={columns}
				/>
					<ReactTable
						defaultPageSize={10}
						data={dataReduced}
						columns={columnsReduced}
				/>
			</section>
		)	
}
}
export default CostPerView