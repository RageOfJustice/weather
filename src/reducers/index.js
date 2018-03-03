import {combineReducers} from "redux-immutable";
import search from './search';
import favorites from "./favorites";
import more from "./more";

export default combineReducers({search, favorites, more});
