import React from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, Link } from 'react-router';

import Index from './layouts/Index';
import Home from './components/Home';
import About from './components/About';


ReactDOM.render((
  <Router>
      <Route path="/" component={Index}>
        <Route path="home" component={Home}/>
        <Route path="about" component={About}/>
      </Route>
    </Router>
  ), document.getElementById('app')
);
