import React, { useState } from 'react'
import ss3img from "../../assets/ss3img.png"
import TextField from '../TextField'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const SignupStep3 = ({ setCurrentStage, data, handleSubmit }) => {
  const errNotify = (err) => toast?.error(err);
  const [pwd, setPwd] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)
  const handlePwdChange = (e) => { setPwd(e.target.value) }
  const [confirmPwd, setConfirmPwd] = useState('')
  const handleConfirmPwdChange = (e) => { setConfirmPwd(e.target.value) }
  const navigate = useNavigate()


  const handleNext = () => {
    if (pwd === '') {
      errNotify('Password cannot be blank')
      return
    } else if (pwd !== confirmPwd) {
      errNotify('Confirm password must match Password')
      return
    } else if (pwd.length < 6) {
      errNotify("password must be longer than or equal to 6 characters and must contain at leat 1 upper case character.")
      return
    } else if (!acceptTerms) {
      errNotify('Please accept the terms and conditions')
      return
    }
    data.password = pwd
    handleSubmit()
    setCurrentStage(4)
  }



  return (
    <div className='flex min-h-[100vh]'>
      <div className='w-full md:w-6/12 flex  flex-col items-center justify-center pt-5'>
        <div className='flex flex-col gap-4 items-center justify-center mx-3 flex-grow w-[90%] md:w-[80%] max-w-[700px]'>
          <div className='self-start'>
            <p className='font-bold'>Registration ends</p>
            <p className='font-[300]'>Secure Your Account: Set a Strong Password and Complete Your Registration!</p>
          </div>
          <div className='flex flex-col w-full gap-3'>
            <TextField id='password' inputType="password" placeholder={'Enter your password'} inputLabel='Password' onChange={handlePwdChange} value={pwd} />
            <TextField id='confirm_password' inputType="password" placeholder={'Confirm your password'} inputLabel='Confirmation' onChange={handleConfirmPwdChange} value={confirmPwd} />
            <div class="flex items-center">
              <input id="skill-checkbox-1" type="checkbox" checked={acceptTerms} onClick={() => {setAcceptTerms(!acceptTerms)}} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 " />
              <label for="skill-checkbox-1" class="ml-2 text-md font-[300] text-gray-900 dark:text-gray-300">I accept the terms, conditions and privacy policy</label>
            </div>
            <div className='flex gap-3 justify-center mt-3'>
              <button onClick={() => setCurrentStage(2)} className='bg-[#BBD1F5] text-[#0A3CB1] py-2 w-[200px] rounded-sm font-bold'>Previous</button>
              <button onClick={() => handleNext()} className='bg-[#0A3CB1] py-2 w-[200px] rounded-sm font-bold text-white'>Sign Up</button>
            </div>
          </div>

        </div>
        <div className='w-full flex flex-col gap-4 '>
          <div className='flex gap-2 justify-center'>
            <p className='text-[#737373]'>Have an account ? </p>
            <button onClick={() => navigate('/login')} className='text-[#0A3CB1] font-bold'> Log In</button>
          </div>
          <hr />
          <div className='w-10/12 mx-auto pt-4 pb-7 flex flex-col gap-3'>
            <p><span className='text-[#0A3CB1] font-bold'>Step 3 : </span> End of subscription</p>
            <div className='flex justify-between gap-3'>
              <div className='h-2 w-4/12 bg-[#0A3CB1] rounded-full' />
              <div className='h-2 w-4/12 bg-[#0A3CB1] rounded-full' />
              <div className='h-2 w-4/12 bg-[#0A3CB1] rounded-full' />
            </div>
          </div>
        </div>

      </div>
      <div className='hidden md:w-6/12 md:flex sticky top-0 h-screen flex-col gap-5 justify-center  text-white text-center items-center bg-gradient-to-b from-[#023DA5] to-[#0084D9]'>
        <h1 className='font-bold text-5xl max-w-[500px] text-center'>Completed Project, Our Priority</h1>
        <p className='font-[300] max-w-[500px] text-center'>Seamless Project Delivery and Secure Payment for Engineers and Clients on our plateform</p>
        <img src={ss3img} alt='' className='w-[60%] max-w-[650px]' />
      </div>
    </div>
  )
}

export default SignupStep3







