import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { userRole } from '../redux/slice/userSlice'

const EngineerRoute = () => {
  const myRole = useSelector(userRole)
  
  return (
    myRole === "engineer" || myRole === "admin"  ? <Outlet /> : <Navigate to={'/'} /> 
    )
}

export default EngineerRoute