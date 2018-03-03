import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import SearchPage from '../SearchPage';
import FavoritesPage from '../FavoritesPage';
import MorePage from '../MorePage';
import Menu from '../Menu';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Route path="/" component={Menu}/>
            <div className="App-container">
              <Switch>
                <Route exact path="/" component={SearchPage}/>
                <Route path="/favorites" component={FavoritesPage}/>
                <Route path="/more/:woeid" component={MorePage} />
                <Redirect to="/" />
              </Switch>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
