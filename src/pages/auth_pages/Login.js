/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import login_logo from "../../assets/login_logo.png"
import login_hat from "../../assets/login_hat.png"
import google from "../../assets/google-icon.png"
import linkedin from "../../assets/linkedin-icon.png"
import logo from "../../assets/logo1.png"
import TextField from '../../components/TextField'
import loading from '../../assets/loading2.gif'
import { useNavigate } from 'react-router-dom'
import { authToken, signInUser, userMessage, userRequestsStatus } from '../../redux/slice/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie';

const Login = () => {
  const errNotify = (err) => err?.length > 0 && toast?.error(err);
  const [email, setEmail] = useState('')
  const handleEmailChange = (e) => { setEmail(e.target.value) }
  const [pwd, setPwd] = useState('')
  const handlePwdChange = (e) => { setPwd(e.target.value) }
  const [isLoading, setIsLoading] = useState(false)
  const usrError = useSelector(userMessage)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const requestStatus = useSelector(userRequestsStatus)
  const myToken = useSelector(authToken)


  useEffect(() => {
    if (requestStatus === "failed") {
      console.log(usrError);
      if (Array.isArray(usrError)) {
        usrError.forEach((err) => {
          errNotify(err)
        })
      } else errNotify(usrError);
    }
  }, [requestStatus])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      dispatch(signInUser({ username: email, password: pwd }))
      setEmail('')
      setPwd('')

    } catch (err) {
      if (!err) {
        errNotify('No Server Response')
      } else if (err?.status === 400) {
        errNotify('Missing Username or Password')
      } else if (err?.status === 401) {
        errNotify('Unauthorized')
      } else if (err?.status === 500) {
        errNotify(err?.data?.error?.message)
      } else {
        errNotify('Login Failed')
      }
    }
  }

  useEffect(() => {
    if (requestStatus === 'successful') {
      // setIsLoading(false)
      Cookies.set('token', myToken);
      navigate('/')
    }
    else if (requestStatus === 'loading') {
      setIsLoading(true)
    }
    else if (requestStatus === 'failed') {
      setIsLoading(false)
    }
  }, [requestStatus])

  const content = (
    <div className='flex min-h-[100vh]'>
      <div className='hidden md:w-6/12 md:flex sticky top-0 h-screen flex-col gap-5 justify-end  text-white text-center items-center bg-gradient-to-b from-[#023DA5] to-[#0084D9]'>
        <img src={login_hat} alt='' className='w-[200px] ' />
        <img src={login_logo} alt='' className='w-[90%]  max-w-[600px]' />
      </div>
      <div className='w-full md:w-6/12 flex  flex-col items-center justify-center py-3'>
        <div className='flex flex-col gap-6 items-center justify-center mx-6 w-[90%] sm:w-[75%] max-w-[700px] flex-grow'>

          <img src={logo} alt='' className='w-[120px]' />
          <h2 className='text-[#0A3CB1] md:text-5xl text-3xl font-[300] text-center'>WELCOME BACK</h2>
          <div className='self-start'>
            <p className='font-[300]'>Welcome to our login page. Please enter your login details below to access your account.</p>
          </div>
          <div className='flex justify-between gap-5 w-full'>
            <div className='rounded-lg border border-[#E2E8F0] w-6/12 flex items-center gap-5 px-6 py-4'>
              <img src={google} alt='google' className='h-6' />
              <p>Google</p>
            </div>
            <div className='rounded-lg border border-[#E2E8F0] flex w-6/12 items-center gap-5 px-6 py-4'>
              <img src={linkedin} alt='google' className='h-6' />
              <p>LinkedIn</p>
            </div>
          </div>
          <div className='w-full flex items-center gap-2 justify-between'>
            <div className='h-[1px] w-5/12 bg-[#E8E8E8]' />
            <p>OR</p>
            <div className='h-[1px] w-5/12 bg-[#E8E8E8]' />
          </div>
          <form className='flex flex-col w-full gap-3' onSubmit={handleSubmit}>
            <TextField id='email' inputType="email" placeholder={'Enter your professional email address'} inputLabel='Email' onChange={handleEmailChange} value={email} isRequired={true} />
            <TextField id='password' inputType="password" placeholder={'Enter your password'} inputLabel='Password' onChange={handlePwdChange} value={pwd} isRequired={true} />
            <Link  className='self-end underline cursor-pointer' to={'/forgot_password'} >Forgot Password?</Link>
            <div className='flex justify-center'>
              <button onClick={() => { }} className='text-white bg-[#0A3CB1] py-2 w-full rounded-sm font-bold'>SIGN IN</button>
            </div>
          </form>
          <div className='flex gap-3 mt-3'>Vous n'avez pas de compte ? <button onClick={() => navigate('/signup')} className='font-bold text-[#D53669] '>Sign up</button></div>
        </div>
      </div>
    </div>
  )
  return (
    <>
      {isLoading ?
        (
          <div className='flex items-center justify-center w-screen h-screen'>
            <div className='flex flex-col items-center'>
              <img src={loading} alt='loading' className=' md:w-[350px] w-[250px]' />
              <h3 className='text-lg'>Loading...</h3>
            </div>
          </div>
        ) :
        content}
    </>
  )
}

export default Login