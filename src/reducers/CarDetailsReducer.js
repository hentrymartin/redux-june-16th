import { CAR_DETAILS_RECEIVED } from '../actions/CarDetailsAction';

const defaultState = {
  car: {},
};

export default function CarDetailsReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case CAR_DETAILS_RECEIVED:
      return {
        ...state,
        car: action.car,
      };
    default:
      return state;
  }
}
