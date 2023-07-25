import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from "react-router-dom"
// import store from './store/authReducer';
import Login from './component/Login';
import Logout from './component/Logout';
import Dashboard from './component/Dashboard';
// import ProtectedRoute from './component/ProtectedRoute';

const App = () => {
  return (
    <Login />
    // <Provider store={store}>

    // <Routes>
    //   <Route exact path="/login" component={Login} />
    //   {/* <Route exact path="/logout" component={Logout} /> */}
    //   {/* <ProtectedRoute exact path="/dashboard" component={Dashboard} /> */}

    // </Routes>

    // </Provider>
  );
};

export default App;