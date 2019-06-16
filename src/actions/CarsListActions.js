export const CARS_LIST_RECEIVED = 'CARS_LIST_RECEIVED';

export function onCarsReceived(cars) {
  return {
    type: CARS_LIST_RECEIVED,
    cars,
  };
}

export function getCars() {
  return dispatch => {
    fetch('http://localhost:3004/cars')
      .then(res => res.json())
      .then(response => {
        dispatch(onCarsReceived(response));
      });
  };
}
