import React from 'react';
import { useSelector } from 'react-redux';
import {  Navigate, Outlet, useLocation } from 'react-router-dom';
import { isLogedin } from '../redux/slice/userSlice';
import Cookies from 'js-cookie';

const ProtectedRoute = () => {
  const userSession = useSelector(isLogedin)
  const location = useLocation()
  if(userSession === false) Cookies.set('reload_location', location.pathname);
  const isAuthenticated = userSession;
  
  return (
    isAuthenticated ? <Outlet /> : <Navigate to={'/'} /> 
    )
};

export default ProtectedRoute;