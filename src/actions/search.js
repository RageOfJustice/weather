import ActionTypes from "../constants/ActionTypes";

function requestCities() {
    return {
        type: ActionTypes.SEARCH.REQUEST,
    };
}

function receiveCities(json) {
    return {
        type: ActionTypes.SEARCH.RECEIVE,
        cities: json,
    };
  }

export function fetchCities(cityName) {

  return dispatch => {
    if(cityName){
      dispatch(requestCities());
      return fetch(`/api/location/search/?query=${cityName}`)
        .then(response => response.json())
        .then(json => dispatch(receiveCities(json)))
    } else{
      return Promise.resolve();
    }
  }

}
