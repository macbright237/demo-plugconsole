import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'
import TextField from '../TextField'

const CStep3 = ({ setCurrentStep }) => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const handleFirstnameChange = (e) => { setFirstname(e.target.value) }
  const handleLastnameChange = (e) => { setLastname(e.target.value) }
  const handleSubmit = async (e) => {
    e.preventDefault()

  }

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      <div>
        <h4 className='text-2xl font-bold'>Add your Billings and PayOut Informations</h4>
        <p className='text-[#737373] text-sm font-[300]'>
          Lorem ipsum dolor sit amet consectetur. Neque
          elementum nulla eu ultrices egestas ac vitae arcu sem.
          Odio mauris bibendum euismod pulvinar lacus tortor ligula.
          Est ultrices est nullam dictum in. Sit tellus eu adipiscing
          natoque facilisis feugiat gravida nunc. Ac a scelerisque
          enim nec.
        </p>
      </div>
      <TextField id='creditcard' inputType="text" placeholder={'XXXX XXXX XXXX XXXX'} inputLabel='Credit Card Number' onChange={handleFirstnameChange} value={firstname} isRequired={true} />
      <div className='flex justify-between w-full gap-5'>
        <div className='w-6/12'>
          <TextField id='ccv' inputType="number" placeholder={'123'} inputLabel='CCV Code' onChange={handleFirstnameChange} value={firstname} isRequired={true} />
        </div>
        <div className='w-6/12'>
          <TextField id='expirydate' inputType="text" placeholder={'MM/YYYY'} inputLabel='Expiry Date' onChange={handleLastnameChange} value={lastname} />
        </div>
      </div>
      <TextField id='nameoncard' inputType="text" placeholder={'Ex: John Doe'} inputLabel='Name On Card' onChange={handleFirstnameChange} value={firstname} isRequired={true} />
      <div class="flex items-center">
        <input id="skill-checkbox-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2  " />
        <label for="skill-checkbox-1" class="ml-2 text-md font-[300] text-gray-900 dark:text-gray-300">Save my details for future payout</label>
      </div>
      <div className='flex gap-3 self-end'>
        <div onClick={() => {setCurrentStep(2) }} className='bg-[#BBD1F5] py-3 cursor-pointer rounded-sm text-sm text-[#0A3CB1]  flex items-center gap-2 px-5'>
          <ChevronLeft />
          Subscription plan
        </div>
        <button onClick={() => {}} className='bg-[#0A3CB1] py-3 cursor-pointer rounded-sm text-sm text-white  flex items-center gap-2 px-5'>
          Finish
          <ChevronRight />
        </button>
      </div>
    </form>
  )
}

export default CStep3