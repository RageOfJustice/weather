import ActionTypes from '../constants/ActionTypes';
import {Record, Map, fromJS} from 'immutable';

const InitialState = Record({
  isFetching: false,
  cities: new Map(),
  lastRequestedCity: ""
})

export default function more(state = new InitialState(), action){
  switch(action.type){
    case ActionTypes.MORE.REQUEST:
      return state.merge({"isFetching": true, "lastRequestedCity": action.woeid});
    case ActionTypes.MORE.RECEIVE:
      return state.set("isFetching", false).setIn(["cities", state.get("lastRequestedCity")], fromJS(action.data))
    default:
      return state;
  }
}
