import React from 'react'
import white_logo from "../../assets/white_logo.png"
import signup_complete from "../../assets/signup_complete.png"
import { ArrowLeftCircle } from 'react-bootstrap-icons'
const SignupCompleted = () => {
  return (
    <div className='flex flex-col gap-3 min-h-[100vh] items-center justify-center bg-gradient-to-b from-[#023DA5] to-[#0084D9]'>
      <img src={white_logo} alt='' className='w-[200px]' />
      <div className='flex flex-col items-center justify-between gap-3 w-[80%] h-[65vh] max-h-[600px] max-w-[900px] rounded-xl bg-white p-10'>
        <img src={signup_complete} alt='' className='w-[200px]' />
        <h2 className='font-bold text-5xl text-[#0A3CB1]'>Congratulations</h2>
        <p className='text-center text-[#151515] font-[300] w-[70%] '>
          You’re now a member of the board. Congratulations on successfully signing up
          and taking the first step towards unlocking a world of exciting career opportunities.
        </p>
        <button onClick={() => { }} className='bg-[#0A3CB1] py-2 w-[250px] rounded-sm font-bold text-white'>Go to your email</button>
        <div className='flex gap-2 justify-center text-[12px]'>
          <p className='text-[#737373]'>Don’received any email ? </p>
          <button className='text-[#0A3CB1] font-bold'> Send another</button>
        </div>
      </div>
      <button className='flex gap-1 text-white text-[13px] items-center'>
        <ArrowLeftCircle />
        Return to home
      </button>
    </div>
  )
}

export default SignupCompleted