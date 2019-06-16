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
      </div>
    );
  }
}

export default CarsList;
