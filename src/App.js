import React from 'react';
import { Route  , Switch} from 'react-router-dom';
import AllLaunches from "./hoc/AllLaunches";
import UpcomingLaunches from "./hoc/UpcomingLaunches";
import PastLaunches from "./hoc/PastLaunches";

import logo from './assets/Logo.png';
import './App.css';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src = {logo} alt = "spacex Logo"/>
      </header>
      <Switch>
        <Route exact path = '/' component = {AllLaunches} />
        <Route exact path = '/upcoming' component = {UpcomingLaunches} />
        <Route exact path = '/past' component = {PastLaunches} />
      </Switch>
    </div>
  );
}

export default App;
