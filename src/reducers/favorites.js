import ActionTypes from '../constants/ActionTypes';
import {Record, List, is} from 'immutable';

const InitialState = Record({
  cities: new List(),
  filtered: new List(),
  lastFilter: ""
});

function filter(state, cityName = state.get("lastFilter")) {
  return state.withMutations(st => {
    st.set("lastFilter", cityName);
    if(cityName){
      st.set("filtered", st.get("cities").filter(val => val.get("title").toLowerCase().startsWith(cityName.toLowerCase())));
    }else {
      st.set("filtered", st.get("cities"));
    }
  })
}

export default function favorites(state = new InitialState(), action){
  switch(action.type){
    case ActionTypes.REMOVE_FROM_FAVORITES:
    debugger;
      return filter(state.update("cities", cities => cities.delete(cities.findIndex((val) => is(val,action.city)))));
    case ActionTypes.FILTER_FAVORITES:
      return filter(state, action.cityName);
    case ActionTypes.ADD_TO_FAVORITES:
      return state.get("cities").includes(action.city) ? state : filter(state.update("cities", cities => cities.push(action.city)));
    default:
    return state;
  }
}
