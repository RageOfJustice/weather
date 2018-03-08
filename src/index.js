import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import lsConfig from './localStorageConfig';
import persistState from 'redux-localstorage';
import {Map} from 'immutable';

const createPersistentStore = compose(
  persistState("favorites", lsConfig),
  applyMiddleware(thunkMiddleware)
)(createStore);

const store = createPersistentStore(rootReducer, new Map());


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
