import {Map} from 'immutable';

export const loadState = () => {
  try{
    const serializedState = localStorage.getItem('stage');
    if(serializedState === null){
      return undefined;
    }
    return new Map(JSON.parse(serializedState));
  } catch(err){
    return undefined;
  }
}

export const saveState = (state) => {
  try{
    const serializedState = state.toJSON();
    if(serializedState === null){
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch(err){
    return undefined;
  }
}
