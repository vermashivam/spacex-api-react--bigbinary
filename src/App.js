import React from 'react';
import { Route  , Switch} from 'react-router-dom';
import AllLaunches from "./componets/AllLaunches";
import UpcomingLaunches from "./componets/UpcomingLaunches";
import PastLaunches from "./componets/PastLaunches";
import SuccessLaunch from "./componets/SuccessLaunch";
import LaunchByDate from "./componets/LaunchByDate";

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
        <Route exact path = '/success:val' component = {SuccessLaunch} />
        <Route exact path = '/start:startDate/end:endDate' component = {LaunchByDate} />
      </Switch>
    </div>
  );
}

export default App;
