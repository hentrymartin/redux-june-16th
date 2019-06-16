export const CAR_DETAILS_RECEIVED = 'CAR_DETAILS_RECEIVED';

export function onCarReceived(car) {
  return {
    type: CAR_DETAILS_RECEIVED,
    car,
  };
}

export function getCarById(id) {
  return dispatch => {
    fetch(`http://localhost:3004/cars/${id}`)
      .then(res => res.json())
      .then(response => {
        console.log(response);
        dispatch(onCarReceived(response));
      });
  };
}
