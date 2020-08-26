import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../layout/navbar/Navbar';
import Login from '../auth/Login';
import Register from '../auth/Register';

const Routes = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </Router>
);

export default Routes;
