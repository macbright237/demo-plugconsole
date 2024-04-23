import React from 'react'
import TextField from '../TextField'
import { ChevronRight } from 'react-bootstrap-icons'

const EStep1 = ({setCurrentStep, completeMyData, setCompleteMyData}) => {
  const handleEmailChange = (e) => { setCompleteMyData({...completeMyData, email: e.target.value}) }
  const handleFirstnameChange = (e) => { setCompleteMyData({...completeMyData, firstName: e.target.value}) }
  const handleLastnameChange = (e) => { setCompleteMyData({...completeMyData, lastName: e.target.value}) }
  const handleCountryChange = (e) => { setCompleteMyData({...completeMyData, country: e.target.value}) }
  const handleCityChange = (e) => { setCompleteMyData({...completeMyData, city: e.target.value}) }
  const handleStateChange = (e) => { setCompleteMyData({...completeMyData, state: e.target.value}) }
  const handleBioInput = (e) => { setCompleteMyData({...completeMyData, bio: e.target.value}) }
  const handlePostalCodeInput = (e) => { setCompleteMyData({...completeMyData, postalCode: e.target.value}) }
  const handleStreetAddressInput = (e) => { setCompleteMyData({...completeMyData, streetAddress: e.target.value}) }
  



  const handleSubmit = async (e) => {
    e.preventDefault()

    setCurrentStep(2)
  }

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
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
          <TextField id='firstname' inputType="text" placeholder={'Enter your first name '} inputLabel='Firstname' onChange={handleFirstnameChange} value={completeMyData?.firstName} isRequired={true} />
        </div>
        <div className='w-6/12'>
          <TextField id='lastname' inputType="text" placeholder={'Enter your last name '} inputLabel='Lastname' onChange={handleLastnameChange} value={completeMyData?.lastName} isRequired={true} />
        </div>
      </div>
      <TextField id='email' inputType="email" placeholder={'Enter your professional email address'} inputLabel='Email' onChange={handleEmailChange} value={completeMyData?.email} isRequired={true} />
      <TextField id='streetadress' inputType="text" placeholder={'Enter your street address'} inputLabel='Street Address' onChange={handleStreetAddressInput} value={completeMyData?.streetAddress} isRequired={true} />
      <div className='flex justify-between w-full gap-5'>
        <div className='w-6/12'>
          <TextField id='country' inputType="text" placeholder={'Enter your current country name'} inputLabel='Country' onChange={handleCountryChange} value={completeMyData?.country} isRequired={true} />
        </div>
        <div className='w-6/12'>
          <TextField id='city' inputType="text" placeholder={'Enter your city'} inputLabel='City' onChange={handleCityChange} value={completeMyData?.city}  />
        </div>
      </div>
      <div className='flex justify-between w-full gap-5'>
        <div className='w-6/12'>
          <TextField id='state' inputType="text" placeholder={'Enter your state '} inputLabel='State' onChange={handleStateChange} value={completeMyData?.state}  />
        </div>
        <div className='w-6/12'>
          <TextField id='postalcode' inputType="text" placeholder={'00000'} inputLabel='Postal Code' onChange={handlePostalCodeInput} value={completeMyData?.postalCode} />
        </div>
      </div>
      <div>
        <label class="block text-gray-700 text-md  mb-2" for='bio'>
          Bio
        </label>
        <textarea
          className="appearance-none border border-[#BBD1F5] focus:border-[#0A3CB1] font-[300] rounded-lg w-full px-3 py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id='bio' rows={4} placeholder='Please enter your biography' onChange={handleBioInput} value={completeMyData?.bio} required
        />
      </div>
      <button onClick={() => { }} className='bg-[#0A3CB1] py-3 cursor-pointer rounded-sm text-sm text-white self-end flex items-center gap-2 px-5'>
        Professional Background
        <ChevronRight />
      </button>
    </form>
  )
}

export default EStep1