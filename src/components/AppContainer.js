import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Splash from './Splash';
import Navbar from './Navbar';

const AppContainer = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path='/' render={Splash} />
        <Route path='/home' render={ () => <h1>Welcome home, Electron!</h1> } />
      </div>
    </Router>
  );
};

export default AppContainer;
