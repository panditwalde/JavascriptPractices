
import { Routes, Route, Navigate } from "react-router-dom"

import Login from "./component/Login"
import Dashboard from "./component/Dashboard"


function App() {


  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <PrivateRoute path="/dashboard" element={<Dashboard />} /> */}
    </Routes>
  )
}


const PrivateRoute = ({ path, element: Element }) => {
  console.log(path, Element)
  const isAuthenticated = true; // Example: change it to your authentication logic

  return (
    <Route path={path} element={isAuthenticated ? (<Element />) : (<Navigate to="/login" replace={true} />
    )}
    />
  );
};

export default App
