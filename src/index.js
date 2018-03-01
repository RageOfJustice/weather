import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { checkPair } from './actions';

const store = createStore(rootReducer);


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
