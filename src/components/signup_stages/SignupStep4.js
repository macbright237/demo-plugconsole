/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import white_logo from "../../assets/white_logo.png"
import signup_complete from "../../assets/blueSmiley.png"
import loading from '../../assets/loading2.gif'
import { userRequestsStatus } from '../../redux/slice/userSlice'
import { useSelector } from 'react-redux'

const SignupStep4 = ({ currentStage, setCurrentStage }) => {

  const [isLoading, setIsLoading] = useState(true)
  const requestStatus = useSelector(userRequestsStatus)


  useEffect(() => {
    if (requestStatus === 'successful') {
      setIsLoading(false)
    } else if (requestStatus === 'failed') setCurrentStage(3)
  }, [requestStatus])

  const content = (

    <div className='flex flex-col gap-3 min-h-[100vh] items-center justify-center bg-gradient-to-b from-[#023DA5] to-[#0084D9]'>
      <img src={white_logo} alt='' className='w-[200px]' />
      <div className='flex flex-col items-center justify-between gap-3 w-[80%] h-fit max-w-[900px] rounded-xl bg-white p-5 sm:p-10'>
        <img src={signup_complete} alt='' className='w-[200px]' />
        <h2 className='font-bold text-5xl text-[#0A3CB1] text-center'>One step remaining</h2>
        <p className='text-center text-[#151515] font-[300] w-[90%] sm:w-[70%]'>
          Well done creating you account. Theres only one step left before being a member. 
          Kindly confirm the email verification link we sent to your inbox
        </p>
        <button onClick={() => { }} className='bg-[#0A3CB1] py-2 w-[250px] rounded-sm font-bold text-white'>Go to your email</button>
        <div className='flex gap-2 justify-center text-[12px]'>
          <p className='text-[#737373]'>Don’received any email ? </p>
          <button className='text-[#0A3CB1] font-bold'> Send another</button>
        </div>
      </div>
    </div>
  )
  return (
    <div>
      {isLoading ?
        (
          <div className='flex items-center justify-center w-screen h-screen'>
            <div className='flex flex-col items-center'>
              <img src={loading} alt='loading' className=' md:w-[350px] w-[250px]' />
              <h3 className='text-lg'>Loading...</h3>
            </div>
          </div>
        ) :
        content
      }
    </div>
  )
}

export default SignupStep4