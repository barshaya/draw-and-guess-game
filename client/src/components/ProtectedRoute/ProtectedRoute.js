import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...props }) => {
    return (
      <Route 
        {...props} 
        element={props => (
          localStorage.getItem("userName") ?
            <Component {...props} /> :
            <Navigate to='/login' />
        )} 
      />
    )
}

export default ProtectedRoute;
