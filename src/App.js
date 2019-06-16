import React from 'react';
import CarsListContainer from './containers/CarsListContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-wrapper">
        <CarsListContainer />
      </div>
    );
  }
}

export default App;
