import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LoginForm from '../components/LoginForm';
import ProfileScreen from '../components/ProfileScreen';
import PrivateRoute from './PrivateRoute.js';

export const navigation = (
  <Router>
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <PrivateRoute exact path="/profile" component={ProfileScreen} />
      <Route exact path="*" render={() => <div>- 404 Error Path- </div>} />
    </Switch>
  </Router>
);
