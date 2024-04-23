import React, { useState } from 'react'
import TextField from '../TextField'
import { ChevronRight } from 'react-bootstrap-icons'

const CStep1 = ({ setCurrentStep }) => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const handleEmailChange = (e) => { setEmail(e.target.value) }
  const handleFirstnameChange = (e) => { setFirstname(e.target.value) }
  const handleLastnameChange = (e) => { setLastname(e.target.value) }

  return (
    <div className='flex flex-col gap-4'>
      <div>
        <h4 className='text-2xl font-bold'>Add your personal information</h4>
        <p className='text-[#737373] text-sm font-[300]'>
          Lorem ipsum dolor sit amet consectetur. Neque
          elementum nulla eu ultrices egestas ac vitae arcu sem.
          Odio mauris bibendum euismod pulvinar lacus tortor ligula.
          Est ultrices est nullam dictum in. Sit tellus eu adipiscing
          natoque facilisis feugiat gravida nunc. Ac a scelerisque
          enim nec.
        </p>
      </div>
      <div className='flex justify-between w-full gap-5'>
        <div className='w-6/12'>
          <TextField id='firstname' inputType="text" placeholder={'Enter your first name '} inputLabel='Firstname' onChange={handleFirstnameChange} value={firstname} />
        </div>
        <div className='w-6/12'>
          <TextField id='lastname' inputType="text" placeholder={'Enter your last name '} inputLabel='Lastname' onChange={handleLastnameChange} value={lastname} />
        </div>
      </div>
      <TextField id='companyname' inputType="text" placeholder={'Enter the company name '} inputLabel='Company name' onChange={handleFirstnameChange} value={firstname} />
      <TextField id='email' inputType="email" placeholder={'Enter your professional email address'} inputLabel='Email' onChange={handleEmailChange} value={email} />
      <TextField id='streetadress' inputType="text" placeholder={'Enter your street address'} inputLabel='Street Address' onChange={handleFirstnameChange} value={firstname} />
      <div className='flex justify-between w-full gap-5'>
        <div className='w-6/12'>
          <TextField id='country' inputType="text" placeholder={'Enter your current country '} inputLabel='Country' onChange={handleFirstnameChange} value={firstname} />
        </div>
        <div className='w-6/12'>
          <TextField id='city' inputType="text" placeholder={'Enter your city'} inputLabel='City' onChange={handleLastnameChange} value={lastname} />
        </div>
      </div>
      <div className='flex justify-between w-full gap-5'>
        <div className='w-6/12'>
          <TextField id='state' inputType="text" placeholder={'Enter your state '} inputLabel='State' onChange={handleFirstnameChange} value={firstname} />
        </div>
        <div className='w-6/12'>
          <TextField id='postalcode' inputType="text" placeholder={'00000'} inputLabel='Postal Code' onChange={handleLastnameChange} value={lastname} />
        </div>
      </div>
      <div onClick={() => { setCurrentStep(2)}} className='bg-[#0A3CB1] py-3 cursor-pointer rounded-sm text-sm text-white self-end flex items-center gap-2 px-5'>
        Professional Background
        <ChevronRight />
      </div>
    </div>
  )
}

export default CStep1