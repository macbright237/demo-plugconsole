/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import logo from '../../assets/logo3.png'
import { Link, useNavigate } from 'react-router-dom';
import TextField from "../../components/TextField";
const ForgotPassword = () => {
  const navigate = useNavigate()
  return (
    <div className=" flex flex-col bg-[#E8E8E8] h-screen ">
      <div className='w-[100%]  items-center sticky top-0 z-50 shadow-md bg-white border-b'>
        <div className='flex justify-between  py-5 w-[90%] max-w-[1300px] mx-auto'>
          <div className='flex items-center gap-3'>
            <img onClick={() => { navigate('/dashboard') }} src={logo} alt='logo' className='h-[30px] ' />
          </div>
          <div className='flex gap-4 text-lg text-[#0b325a] items-center'>
            <p className="text-sm hidden sm:block">Already have an account?</p>
            <button className="bg-[#0A3CB1] hover:bg-[#0A3CB1] text-[#FFF]  py-2 px-8 rounded text-sm">
              Sign In
            </button>
          </div>
        </div>
      </div>


      <div className="  flex items-center justify-center grow">
        <div className="w-[90%] max-w-[600px] h-fit border rounded-xl bg-[#FFF] text-center flex flex-col  justify-center gap-4 py-10 px-5">
          <p className="text-3xl text-[#0A3CB1] font-bold ">Forgot Password</p>
          <p className="text-[#737373] ">
            Enter your email to send link reset password
          </p>
          <div className="text-start">
            <TextField id='email' inputType="email" placeholder={'Enter your professional email address'} inputLabel='Email'  />
          </div>
          <button className="bg-[#0A3CB1] hover:bg-[#0A3CB1] w-[200px] self-center text-[#FFF] font-bold py-2 px-10 rounded">
            Send link
          </button>
          <p className=" ">Didn't receive link? <Link to={'/update_password'} className="text-[#0A3CB1]" ><b>Resend</b></Link> </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
