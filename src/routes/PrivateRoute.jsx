import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    
    const {user} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    // condition user to use private routes
    if(user){
        return children;
    }

    return <Navigate state={{from: location}} to='/login'></Navigate>;
};

export default PrivateRoute;

/***
 * -----------------
 *      STEPS
 * -----------------
 * 1. check user is logged in or not
 * 2. if user is logged in, then allow them to visit the route
 * 3. Else redirect the user to the login page
 * 4. setup the private router
 */