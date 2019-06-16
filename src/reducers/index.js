import { combineReducers } from 'redux';
import CarsListReducer from './CarsListReducer';
import CarDetailsReducer from './CarDetailsReducer';

export default combineReducers({
  CarsListReducer,
  CarDetailsReducer,
});
