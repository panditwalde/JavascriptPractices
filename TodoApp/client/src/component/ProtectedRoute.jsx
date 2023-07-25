import React from 'react';
import { useSelector } from 'react-redux';
import {  Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // <Redirect to="/login" />

  return (
    <Route
      {...rest}
      render={(props) => isAuthenticated ? <Component {...props} /> :null
      }
    />
  );
};

export default ProtectedRoute;