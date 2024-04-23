/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import loading from '../assets/loading2.gif'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Cookies from 'js-cookie';
import { getMe, userRequestsStatus } from '../redux/slice/userSlice';

const SplashScreen = () => {
  const loadingStatus = useSelector(userRequestsStatus)
  const navigate =  useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const token = Cookies.get('token'); 
    dispatch(getMe(token))
  }, [])

  useEffect(() => {
     if (loadingStatus === 'successful') {
      const reloadLocation = Cookies.get('reload_location'); 
      if(reloadLocation?.length > 0) {
        navigate(reloadLocation)
        Cookies.remove('reload_location')
      } else navigate('/dashboard');
    } else if (loadingStatus === 'failed') {
      navigate('/login')
    } 
  }, [loadingStatus])

  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <div className='flex flex-col items-center'>
        <img src={loading} alt='loading' className=' md:w-[350px] w-[250px]' />
        <h3 className='text-lg'>Loading...</h3>
      </div>
    </div>
  )
}

export default SplashScreen