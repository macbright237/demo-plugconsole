import React, { useState } from 'react'
import { Send } from 'react-bootstrap-icons'
import TextField from './TextField'

const NewsLetterSubscribe = () => {
  const [show, setShow] = useState(true)
  return (
    <div className={` ${!show && 'hidden'}  bg-gradient-to-b from-[#023DA5] w-full to-[#0084D9] p-4 flex flex-col gap-3 rounded-xl text-white`}>
      <div className='flex justify-between'>
        <div className='rounded-full p-3 bg-[#fdfdfd96]'>
          <Send className='text-[#023DA5]' />
        </div>
        <button onClick={() => {setShow(false)}} className='text-[13px] font-[300]'>Not now</button>
      </div>
      <h3 className='text-3xl font-[300]'>Daily newsletter</h3>
      <p className='text-[13px] font-[300]'>We'll keep you up to date with the most interesting new tasks on primus plug.</p>
      <TextField id='email' inputType="email" placeholder={'Enter your professional email address'} />
      <p className='text-[13px] font-[300]'>We care about your data in our <span className='underline'>privacy policy</span></p>
      <button onClick={() => { }} className='bg-white py-2 w-full rounded-sm font-bold text-[#0A3CB1]'>Subscribe</button>
    </div>
  )
}

export default NewsLetterSubscribe