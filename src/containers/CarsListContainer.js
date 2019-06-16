import { connect } from 'react-redux';
import { getCars } from '../actions/CarsListActions';
import CarsList from '../components/CarsList';

const mapStateToProps = store => {
  console.log(store);
  return {
    cars: store.CarsListReducer.cars,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCars: () => {
      getCars()(dispatch);
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarsList);
