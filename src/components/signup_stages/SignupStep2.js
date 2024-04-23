import React, { useState } from 'react'
import ss2img from "../../assets/ss2img.png"
import google from "../../assets/google-icon.png"
import linkedin from "../../assets/linkedin-icon.png"
import TextField from '../TextField'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const SignupStep2 = ({ setCurrentStage, setData, data }) => {
  const errNotify = (err) => err.length > 0 && toast?.error(err);
  const [surname, setSurname] = useState(data.lastName)
  const handleSurnameChange = (e) => { setSurname(e.target.value) }
  const [email, setEmail] = useState(data.email)
  const handleEmailChange = (e) => { setEmail(e.target.value) }
  const [firstname, setFirstname] = useState(data.firstName)
  const handleFirstnameChange = (e) => { setFirstname(e.target.value) }
  const [phone, setPhone] = useState(data.phone)
  const handlePhoneChange = (e) => { setPhone(e.target.value) }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const navigate = useNavigate()


  const handleNext = () => {
    if (email === '') {
      errNotify('Email cannot be blank')
      return
    } else if (phone === '') {
      errNotify('phone cannot be blank')
      return
    } else if (surname === '') {
      errNotify('Surname cannot be blank')
      return
    } else if (firstname === '') {
      errNotify('Firstname cannot be blank')
      return
    }
    if(!emailRegex.test(email)){
      errNotify('Please provide a valid email address')
      return
    }
    setData({
      ...data,
      firstName: firstname,
      phone: phone,
      lastName: surname,
      email: email,
    })
    setCurrentStage(3)
  }

  return (
    <div className='flex min-h-[100vh]'>
      <div className='w-full md:w-6/12 flex  flex-col items-center justify-center pt-5'>
        <div className='flex flex-col gap-4 items-center justify-center mx-3 flex-grow w-[90%] md:w-[80%] max-w-[700px]'>
          <div className='self-start'>
            <p className='font-bold'>Your personal information</p>
            <p className='font-[300]'>Provide Your Personal Details and Connect with a World of Opportunities!</p>
          </div>
          <div className='flex justify-between gap-5 w-full'>
            <div className='rounded-lg border border-[#E2E8F0] w-6/12 flex items-center gap-3 sm:gap-5 sm:px-6 px-2 py-4'>
              <img src={google} alt='google' className='h-6' />
              <p>Register with Google</p>
            </div>
            <div className='rounded-lg border border-[#E2E8F0] flex w-6/12 items-center gap-3 sm:gap-5 sm:px-6 px-2 py-4'>
              <img src={linkedin} alt='google' className='h-6' />
              <p>Register with LinkedIn</p>
            </div>
          </div>
          <div className='w-full flex items-center gap-2 justify-between'>
            <div className='h-[1px] w-5/12 bg-[#E8E8E8]' />
            <p>OR</p>
            <div className='h-[1px] w-5/12 bg-[#E8E8E8]' />
          </div>
          <div className='flex flex-col w-full gap-3'>
            <TextField id='email' inputType="email" placeholder={'Enter your professional email address'} inputLabel='Email' onChange={handleEmailChange} value={email} />
            <TextField id='phone' inputType="email" placeholder={'Enter your phone number'} inputLabel='Phone Number' onChange={handlePhoneChange} value={phone} />
            <TextField id='surname' inputType="text" placeholder={'Enter your last name '} inputLabel='Surname' onChange={handleSurnameChange} value={surname} />
            <TextField id='firstname' inputType="text" placeholder={'Enter your first name '} inputLabel='Firstname' onChange={handleFirstnameChange} value={firstname} />
            <div className='flex gap-3 justify-center mt-3'>
              <button onClick={() => setCurrentStage(1)} className='bg-[#BBD1F5] text-[#0A3CB1] py-2 w-[200px] rounded-sm font-bold'>Previous</button>
              <button onClick={() => handleNext()} className='bg-[#0A3CB1] py-2 w-[200px] rounded-sm font-bold text-white'>Next</button>
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
            <p><span className='text-[#0A3CB1] font-bold'>Step 2 : </span> Enter your personnal information</p>
            <div className='flex justify-between gap-3'>
              <div className='h-2 w-4/12 bg-[#0A3CB1] rounded-full' />
              <div className='h-2 w-4/12 bg-[#0A3CB1] rounded-full' />
              <div className='h-2 w-4/12 bg-[#E8E8E8] rounded-full' />
            </div>
          </div>
        </div>

      </div>
      <div className='hidden md:w-6/12 md:flex sticky top-0 h-screen flex-col gap-5 justify-center  text-white text-center- items-center bg-gradient-to-b from-[#023DA5] to-[#0084D9]'>
        <h1 className='font-bold text-6xl max-w-[500px] text-center'>Engineers, Make Your Mark</h1>
        <p className='font-[300] max-w-[500px] text-center'>Connect, Collaborate, and Conquer by joining our plateform</p>
        <img src={ss2img} alt='' className='w-[60%] max-w-[650px]' />
      </div>
    </div>
  )
}

export default SignupStep2