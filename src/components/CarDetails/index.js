import React from 'react';

// React hooks way
// const CarDetails = props => {
//   React.useEffect(() => {
//     const id = props.match.params.id;
//     props.getCarById(id);
//   }, []);

//   return (
//     <div className="car-details">
//       <h2>Car Details</h2>
//       <div className="car-detail">
//         <span>{props.carDetails.name}</span>
//       </div>
//     </div>
//   );
// };

// life cylce method way
class CarDetails extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getCarById(id);
  }
  render() {
    console.log(this.props);
    return (
      <div className="car-details">
        <h2>Car Details</h2>
        <div className="car-detail">
          <span>{this.props.carDetails.name}</span>
        </div>
      </div>
    );
  }
}

export default CarDetails;
