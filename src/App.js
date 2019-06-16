import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CarsListContainer from './containers/CarsListContainer';
import CarDetailsContainer from './containers/CarDetailsContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-wrapper">
        <Router>
          <Route path="/list" component={CarsListContainer} />
          <Route path="/details/:id" component={CarDetailsContainer} />
        </Router>
      </div>
    );
  }
}

export default App;
