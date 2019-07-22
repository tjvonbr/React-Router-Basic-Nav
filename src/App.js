import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </div>
  </Router>
);

export default App;
