import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  const authenticated = useSelector(state => state.authenticated);

  return authenticated && (<Route {...rest} render={(props) => <Component {...props} />} />)
}