import ActionTypes from "../constants/ActionTypes";

function requestCity(woeid) {
    return {
        type: ActionTypes.MORE.REQUEST,
        woeid
    }
}

function receiveCity(json) {
    return {
        type: ActionTypes.MORE.RECEIVE,
        data: json,
    }
  }

export function fetchCity(woeid) {
  return dispatch => {
    dispatch(requestCity(woeid));
    return fetch(`/api/location/${woeid}/`)
      .then(response => response.json())
      .then(json => dispatch(receiveCity(json)))
  }
}
