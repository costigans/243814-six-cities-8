import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const hasAccess = false;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return hasAccess ? <Component {...props} /> : <Redirect to="/login"/>;
    }}
  />
);

export default PrivateRoute;
