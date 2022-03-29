import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hook/UseAuth';

const PrivateRoute = ({ children }) => {
    let {user}= useAuth()
    let location = useLocation()

    if(user.email){
        return children
    }
    return  <Navigate to="/regester" state={{ from: location }} replace />
};

export default PrivateRoute;