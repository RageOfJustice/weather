import ActionTypes from "../constants/ActionTypes";

export function addToFavorites(city) {
  return {
    type: ActionTypes.ADD_TO_FAVORITES,
    city
  };
}

export function removeFromFavorites(city) {
  return {
    type: ActionTypes.REMOVE_FROM_FAVORITES,
    city
  };
}

export function filterFavorites(cityName) {
  return {
    type: ActionTypes.FILTER_FAVORITES,
    cityName
  };
}
