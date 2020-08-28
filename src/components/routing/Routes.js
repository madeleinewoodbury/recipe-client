import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Login from '../forms/auth/Login';
import Register from '../forms/auth/Register';
import Dashboard from '../dashboard/Dashboard';
import AddRecipe from '../forms/AddRecipe';

const Routes = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/add-recipe" component={AddRecipe} />
    </Switch>
  </Router>
);

export default Routes;
