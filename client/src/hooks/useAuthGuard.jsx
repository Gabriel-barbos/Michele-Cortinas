import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = ({Component}) => {
    let token = sessionStorage.getItem("token");
    const auth = ( token != null ) ? true : null ;

    // If has token, return outlet in other case return navigate to login page

    return auth ? {Component} : <Navigate to="/login" />;
}

export default AuthGuard