import React from 'react'
import { userRole } from '../redux/slice/userSlice'
import { useSelector } from 'react-redux'
import ClientDashboard from './Dashboards/ClientDashboard'
import EngineerDashboard from './Dashboards/EngineerDashboard'

const Dashboard = () => {
  const myRole = useSelector(userRole)
  return (
    myRole === 'client' ? <ClientDashboard /> : <EngineerDashboard />
  )
}

export default Dashboard