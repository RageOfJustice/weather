import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import EnterPageContainer, {EnterPage} from "../EnterPage";
import GamePage from "../GamePage";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <div className="App-container">
              <Switch>
                <Route exact path="/" component={EnterPage}/>
                <Route path="/game" component={GamePage}/>
                <Route path="/end" component={EnterPageContainer} />
                <Redirect to="/" />
              </Switch>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
