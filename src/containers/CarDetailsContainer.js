import { connect } from 'react-redux';
import CarDetails from '../components/CarDetails';
import { getCarById } from '../actions/CarDetailsAction';

const mapStateToProps = store => {
  return {
    carDetails: store.CarDetailsReducer.car,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCarById: id => {
      getCarById(id)(dispatch);
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarDetails);
