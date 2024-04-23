import React from 'react'
import ss1img from "../../assets/ss1img.png"
import logo from "../../assets/logo1.png"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const SignupStep1 = ({setCurrentStage, myRole, setMyRole }) => {
  const navigate = useNavigate()
  const errNotify = (err) => err.length > 0 && toast?.error(err);
  const handleNext = () => {
    if(myRole === '') {
      errNotify('Please choose a role')
      return
    }
    console.log(myRole);
    setCurrentStage(2)
  }
  return (
    <div className='flex min-h-[100vh]'>
      <div className='w-full md:w-6/12 md:flex  flex-col items-center justify-center'>
        <div className='flex flex-col gap-6 items-center justify-center px-6 py-3 flex-grow'>

          <img src={logo} alt='' className='w-[130px]' />
          <h2 className='text-[#0A3CB1] text-3xl md:text-5xl font-[300] text-center'>CREATE A NEW ACCOUNT</h2>
          <div className='self-start'>
            <p className='font-bold'>Your account role</p>
            <p className='font-[300]'>Choose Your Account Role and Navigate Towards Success!</p>
          </div>
          <div className='flex flex-col w-full  gap-5' >
            <div onClick={() => {setMyRole('engineer')}} className={`flex  cursor-pointer border border-[#0A3CB1] w-full py-4 px-5 rounded-lg gap-5 ${myRole === "engineer" && 'text-white bg-[#0A3CB1]'} `}>
              <input type='checkbox' checked={myRole === "engineer"}/>
              <div className=''>
                <p className='font-[ text-2xl'>Engineer</p>
                <p className='font-[300] text-sm'>Embrace Your Role as an Innovator and Problem Solver!</p>
              </div>
            </div>

            <div onClick={() => {setMyRole('client')}} className={`flex border cursor-pointer border-[#0A3CB1] w-full py-4 px-5 rounded-lg gap-5 ${myRole === "client" && 'text-white bg-[#0A3CB1]'}`}>
              <input type='checkbox' checked={myRole === "client"}/>
              <div className=''>
                <p className='font-[ text-2xl'>Client</p>
                <p className='font-[300] text-sm'>In search of engineering excellence: we select the best engineers for your projects</p>
              </div>
            </div>  
          </div>
          <button onClick={() => handleNext()} className='bg-[#0A3CB1] py-2 w-[200px] rounded-sm font-bold text-white self-end'>Next</button>
        </div>
        <div className='w-full flex flex-col gap-4 '>
          <div className='flex gap-2 justify-center'>
            <p className='text-[#737373]'>Have an account ? </p>
            <button onClick={() => navigate('/login')} className='text-[#0A3CB1] font-bold'> Log In</button>
          </div>
          <hr />
          <div className='w-10/12 mx-auto pt-4 pb-7 flex flex-col gap-3'>
            <p><span className='text-[#0A3CB1] font-bold'>Step 1 :</span> Choose your account rôle</p>
            <div className='flex justify-between gap-3'>
              <div className='h-2 w-4/12 bg-[#0A3CB1] rounded-full' />
              <div className='h-2 w-4/12 bg-[#E8E8E8] rounded-full' />
              <div className='h-2 w-4/12 bg-[#E8E8E8] rounded-full' />  
            </div>
          </div>
        </div>

      </div>
      <div className='hidden md:w-6/12 md:flex flex-col gap-5 justify-center  text-white text-center- items-center bg-gradient-to-b from-[#023DA5] to-[#0084D9]'>
        <h1 className='font-bold text-5xl max-w-[500px] text-center'>Break Barriers, Build Bridges</h1>
        <p className='font-[300] max-w-[500px] text-center'>Connect with the best engineers or customers for seamless collaboration and total success!</p>
        <img src={ss1img} alt='' className='w-[70%] max-w-[650px]' />
      </div>
    </div>
  )
}

export default SignupStep1