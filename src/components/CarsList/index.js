import React, { Component } from 'react';

class CarsList extends Component {
  componentDidMount() {
    this.props.getCars();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Cars List</h3>

        <div className="cars-list">
          {this.props.cars.map(car => {
            return <div className="car">{car.name}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default CarsList;
