import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { userRole } from '../redux/slice/userSlice'
import { useSelector } from 'react-redux'

const AdminRoute = () => {
  const myRole = useSelector(userRole)

  return (
    myRole === "admin" ? <Outlet /> : <Navigate to={'/'} />
  )

}

export default AdminRoute