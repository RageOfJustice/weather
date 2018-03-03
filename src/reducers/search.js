import ActionTypes from '../constants/ActionTypes';
import {Record, List} from 'immutable';

const InitialState = Record({
  isFetching: false,
  cities: new List()
});


export default function search(state = new InitialState(), action){
  switch(action.type){
    case ActionTypes.SEARCH.REQUEST:
      return state.set("isFetching", true);
    case ActionTypes.SEARCH.RECEIVE:
      return state.merge({
        isFetching: false,
        cities: action.cities
      });
    default:
    return state;
  }
}
