import { CARS_LIST_RECEIVED } from '../actions/CarsListActions';

const defaultState = {
  cars: [],
};

export default function CarsListReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case CARS_LIST_RECEIVED:
      return {
        ...state,
        cars: action.cars,
      };
    default:
      return state;
  }
}
