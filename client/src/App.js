import React, { Component } from 'react';
import CostPerView from './containers/CostPerView'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

class App extends Component {

	componentDidMount = () => {

	}
  render() {
    return (
      <div className="App">
				<CostPerView/>
      </div>
    );
  }
}



export default App;
