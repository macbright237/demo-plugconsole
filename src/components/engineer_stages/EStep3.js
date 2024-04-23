/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, PersonFill, XLg } from 'react-bootstrap-icons'
import TextField from '../TextField'
import Cookies from 'js-cookie';
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
import loading from '../../assets/loading-div.gif'
import { addExperience, experiences, userRequestsStatus } from '../../redux/slice/userSlice';
import { months } from './EStep2';

const EStep3 = ({ setCurrentStep }) => {
  const myExperiences = useSelector(experiences)
  const [isLoading, setIsLoading] = useState(true)
  const requestStatus = useSelector(userRequestsStatus)
  const [showModal, setShowModal] = useState(false);
  const myToken = Cookies.get('token');
  const dispatch = useDispatch();
  const errNotify = (err) => toast?.error(err);
  const [experience, setExperience] = useState({
    company: "",
    title: "",
    skills: ['Ruby'],
    from: "",
    to: "",
    description: ""
  })
  const handleCompanyInput = (e) => { setExperience({ ...experience, company: e.target.value }) }
  const handleTitleInput = (e) => { setExperience({ ...experience, title: e.target.value }) }
  const handleFromInput = (e) => { setExperience({ ...experience, from: e.target.value }) }
  const handleToInput = (e) => { setExperience({ ...experience, to: e.target.value }) }
  const handleDescriptionInput = (e) => { setExperience({ ...experience, description: e.target.value }) }


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const date1 = new Date(experience.from)
      const date2 = new Date(experience.to)
      if (date1 > date2) {
        errNotify('End date cannot be before start date')
        return
      }
      experience.from = date1
      experience.to = date2
      const body = {
        params: experience,
        token: myToken
      }
      dispatch(addExperience(body))
      handleCloseModal()
    } catch (err) {
      if (!err) {
        errNotify('Something Went Wrong')
      } else if (err?.status === 401) {
        errNotify('Unauthorized')
      } else if (err?.status === 500) {
        errNotify(err?.data?.error?.message)
      } else {
        errNotify(err)
      }
    }
  }



  useEffect(() => {
    if (requestStatus === 'successful') {
      setIsLoading(false)
    }
    else if (requestStatus === 'loading') {
      setIsLoading(true)
    }
    else if (requestStatus === 'failed') {
      setIsLoading(false)
    }
  }, [requestStatus])

  const handleCloseModal = () => {
    setExperience({
      company: "",
      school: "",
      skills: [],
      from: "",
      to: "",
      description: ""
    })
    setShowModal(false)
  }

  const handleShowOnlyYear = (dt) => {
    const date = new Date(dt)
    const mt = months[date.getMonth()]
    return `${mt} ${date.getFullYear()}`
  }


  return (
    <>
      <div className='flex flex-col gap-4' >
        <h4 className='text-2xl font-bold'>Add your personal information</h4>
        <p className='text-[#737373] text-sm font-[300]'>
          Lorem ipsum dolor sit amet consectetur. Neque elementum nulla eu
          ultrices egestas ac vitae arcu sem. Odio mauris bibendum euismod
          pulvinar lacus tortor ligula. Est ultrices est nullam dictum in.
        </p>
        {isLoading ?
          (
            <div className='flex flex-col items-center'>
              <img src={loading} alt='loading' className=' md:w-[350px] w-[250px]' />
              <h3 className='text-lg'>Loading...</h3>
            </div>
          ) : (
            myExperiences.length === 0 ? (
              <div className='bg-white flex justify-center items-center min-h-[500px]'>
                <button onClick={() => { setShowModal(true) }} className='bg-[#0A3CB1] py-3 cursor-pointer rounded-sm text-sm text-white  flex items-center gap-2 px-5'>
                  Add new Experience
                </button>
              </div>
            )
              : (
                <div className='w-[80%] mx-auto flex flex-col gap-3 mt-16'>
                  {
                    myExperiences.map(experience => {
                      return (
                        <div className='flex gap-2 bg-[#EFF6FF] p-3 rounded-md'>
                          <div className='text-[#0A3CB1] bg-[#BBD1F5] text-3xl rounded-md p-2 cursor-pointer flex items-center justify-center w-[60px] h-[60px]'>
                            <PersonFill />
                          </div>
                          <div className='flex flex-col gap-1 text-[#444444] w-10/12'>
                            <h4 className='text-[#0A3CB1] font-bold text-xl'>{experience.title}</h4>
                            <p><span className='font-bold'>{experience.company}</span></p>
                            <div>{handleShowOnlyYear(experience?.from)} - {handleShowOnlyYear(experience?.to)}</div>
                            <p className='text-[#737373] font-[300]'>{experience.description}</p>
                          </div>
                        </div>
                      )
                    })
                  }
                  <button onClick={() => { setShowModal(true) }} className='bg-[#0A3CB1] py-3 cursor-pointer rounded-sm text-sm text-white  flex items-center gap-2 px-5 self-center'>
                    Add new experience
                  </button>
                </div>
              )
          )}
        <div className='flex gap-3 self-end'>
          <button onClick={() => { setCurrentStep(2) }} className='bg-[#BBD1F5] py-3 cursor-pointer rounded-sm text-sm text-[#0A3CB1]  flex items-center gap-2 px-5'>
            <ChevronLeft />
            Professional Background
          </button>
          <button onClick={() => { setCurrentStep(4) }} className='bg-[#0A3CB1] py-3 cursor-pointer rounded-sm text-sm text-white  flex items-center gap-2 px-5'>
            Add Your Experiences
            <ChevronRight />
          </button>
        </div>
      </div>
      {showModal &&
        <div className="fixed top-0  left-0 z-[1000]  h-[100vh] w-full bg-[#00000050] backdrop-blur-sm flex items-center justify-center">
          <div className='rounded-md  flex flex-col bg-[#fafbfd]   min-h-fit overflow-y-auto w-[90%] xl:w-[80%] max-h-[90vh] max-w-[900px] p-3 md:p-10 '>
            <div className='flex justify-between items-start'>
              <div className='w-11/12'>
                <h3 className='text-2xl font-bold'>{'Add Experience'}</h3>
              </div>

              <XLg className='cursor-pointer min-w-[30px] ' onClick={() => handleCloseModal()} />
            </div>
            <form className='w-full flex flex-col gap-4  mt-7' onSubmit={handleSubmit} autoComplete='off'>
              <TextField id={'companyname'} inputLabel={'Company Name'} inputType={'text'} placeholder={'Ex: Google'} isRequired={true} value={experience?.company} onChange={handleCompanyInput} />
              <TextField id={'title'} inputLabel={'Title'} inputType={'text'} placeholder={'Ex: Californie University'} isRequired={true} value={experience?.title} onChange={handleTitleInput} />
              {/* <TextField id={'employmenttype'} inputLabel={'Employment Type'} inputType={'text'} placeholder={'Ex: Bachelor’s'} isRequired={true} />
              <TextField id={'companyname'} inputLabel={'Compny Name'} inputType={'text'} placeholder={'EX: Google'} isRequired={true} />
              <TextField id={'location'} inputLabel={'Location'} inputType={'text'} placeholder={'Ex: Californie'} isRequired={true} /> */}
              <div>
                <label class="block text-gray-700 text-md  mb-2" for='startDate'>
                  Start Date <span className='text-[#DC2626]'>*</span>
                </label>
                <input
                  className="appearance-none border border-[#BBD1F5] focus:border-[#0A3CB1] font-[300] rounded-lg w-full px-3 py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id='startDate' type='date' value={experience?.from} onChange={handleFromInput} required
                />
              </div>
              <div>
                <label class="block text-gray-700 text-md  mb-2" for='endDate'>
                  End Date <span className='text-[#DC2626]'>*</span>
                </label>
                <input
                  className="appearance-none border border-[#BBD1F5] focus:border-[#0A3CB1] font-[300] rounded-lg w-full px-3 py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id='endDate' type='date' value={experience?.to} onChange={handleToInput} required
                />
              </div>
              <div>
                <label class="block text-gray-700 text-md  mb-2" for='description'>
                  Description
                </label>
                <textarea
                  className="appearance-none border border-[#BBD1F5] focus:border-[#0A3CB1] font-[300] rounded-lg w-full px-3 py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id='description' rows={4} value={experience?.description} onChange={handleDescriptionInput} required placeholder='Enter the description'
                />
              </div>
              <div className='flex gap-3 self-end'>
                <div onClick={() => { handleCloseModal() }} className='bg-[#BBD1F5] py-3 cursor-pointer rounded-sm text-sm text-[#0A3CB1]  flex items-center gap-2 px-5'>
                  Cancel
                </div>
                <button onClick={() => { }} className='bg-[#0A3CB1] py-3 cursor-pointer rounded-sm text-sm text-white  flex items-center gap-2 px-5'>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      }
    </>
  )
}

export default EStep3