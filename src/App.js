import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

const LandingPageWithRedirect = () => {
  __has jwt__
    ? <Redirect to="/dashboard" />
    : <LandingPage />
}

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={LandingPageWithRedirect} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/userDetails" component={UserDetails} />
      </div>
    </Router>
  );
}

export default App;
