/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, PersonFill, XLg } from 'react-bootstrap-icons'
import TextField from '../TextField'
import { useDispatch, useSelector } from 'react-redux'
import { educations, engineerEducation, userRequestsStatus } from '../../redux/slice/userSlice'
import Cookies from 'js-cookie';
import loading from '../../assets/loading-div.gif'
import { toast } from 'react-toastify'
export const months = { 1: 'JAN', 2: 'FEB', 3: 'MAR', 4: 'APR', 5: 'MAY', 6: 'JUN', 7: 'JUL', 8: 'AUG', 9: 'SEP', 10: 'OCT', 11: 'NOV', 12: 'DEC', };

const EStep2 = ({ setCurrentStep }) => {
  const myToken = Cookies.get('token');
  const dispatch = useDispatch()
  const requestStatus = useSelector(userRequestsStatus)
  // const myData = useSelector(currentUser)
  const myFormations = useSelector(educations)
  const errNotify = (err) => toast?.error(err);
  const [isLoading, setIsLoading] = useState(false)
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    from: "",
    to: "",
    description: ""
  })
  const handleSchoolInput = (e) => { setEducation({ ...education, school: e.target.value }) }
  const handleDegreeInput = (e) => { setEducation({ ...education, degree: e.target.value }) }
  const handleFromInput = (e) => { setEducation({ ...education, from: e.target.value }) }
  const handleToInput = (e) => { setEducation({ ...education, to: e.target.value }) }
  const handleDescriptionInput = (e) => { setEducation({ ...education, description: e.target.value }) }
  const [showModal, setShowModal] = useState(false)


  const handleCloseModal = () => {
    setEducation({
      school: "",
      degree: "",
      from: "",
      to: "",
      description: ""
    })
    setShowModal(false)
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const date1 = new Date(education.from)
      const date2 = new Date(education.to)
      if (date1 > date2) {
        errNotify('End date cannot be before start date')
        return
      }
      education.from = date1
      education.to = date2
      const body = {
        params: education,
        token: myToken
      }
      dispatch(engineerEducation(body))
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
            myFormations?.length === 0 ? (
              <div className='bg-white flex justify-center items-center min-h-[500px]'>
                <button onClick={() => { setShowModal(true) }} className='bg-[#0A3CB1] py-3 cursor-pointer rounded-sm text-sm text-white  flex items-center gap-2 px-5'>
                  Add new formation
                </button>
              </div>
            )
              : (
                <div className='w-[80%] mx-auto flex flex-col gap-3 mt-16'>
                  {
                    myFormations?.map(formation => {
                      return (
                        <div className='flex gap-2 bg-[#EFF6FF] p-3 rounded-md'>
                          <div className='text-[#0A3CB1] bg-[#BBD1F5] text-3xl rounded-md p-2 cursor-pointer flex items-center justify-center w-[80px]'>
                            <PersonFill />
                          </div>
                          <div className='flex flex-col gap-1 text-[#444444]'>
                            <h4 className='text-[#0A3CB1] font-bold text-xl'>{formation?.school}</h4>
                            <p>{formation?.degree}</p>
                            <div>{handleShowOnlyYear(formation?.from)} - {handleShowOnlyYear(formation?.to)}</div>
                          </div>
                        </div>
                      )
                    })
                  }
                  <button onClick={() => { setShowModal(true) }} className='bg-[#0A3CB1] py-3 cursor-pointer rounded-sm text-sm text-white  flex items-center gap-2 px-5 self-center'>
                    Add new formation
                  </button>
                </div>
              )
          )}
        <div className={``}>

        </div>
        <div className='flex gap-3 self-end'>
          <button onClick={() => { setCurrentStep(1) }} className='bg-[#BBD1F5] py-3 cursor-pointer rounded-sm text-sm text-[#0A3CB1]  flex items-center gap-2 px-5'>
            <ChevronLeft />
            Professional Background
          </button>
          <button onClick={() => { setCurrentStep(3) }} className='bg-[#0A3CB1] py-3 cursor-pointer rounded-sm text-sm text-white  flex items-center gap-2 px-5'>
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
                <h3 className='text-2xl font-bold'>{'Add Formation'}</h3>
              </div>

              <XLg className='cursor-pointer min-w-[30px] ' onClick={() => handleCloseModal()} />
            </div>
            <form className='w-full flex flex-col gap-4  mt-7' onSubmit={handleSubmit} autoComplete='off'>
              <TextField id={'school'} inputLabel={'School'} inputType={'text'} placeholder={'Ex: Californie University'} isRequired={true} value={education?.school} onChange={handleSchoolInput} />
              <TextField id={'degree'} inputLabel={'Degree'} inputType={'text'} placeholder={'Ex: Bachelor’s'} isRequired={true} value={education?.degree} onChange={handleDegreeInput} />
              <div>
                <label class="block text-gray-700 text-md  mb-2" for='startDate'>
                  Start Date <span className='text-[#DC2626]'>*</span>
                </label>
                <input
                  className="appearance-none border border-[#BBD1F5] focus:border-[#0A3CB1] font-[300] rounded-lg w-full px-3 py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id='startDate' type='date' value={education?.from} onChange={handleFromInput} required
                />
              </div>
              <div>
                <label class="block text-gray-700 text-md  mb-2" for='endDate'>
                  End Date <span className='text-[#DC2626]'>*</span>
                </label>
                <input
                  className="appearance-none border border-[#BBD1F5] focus:border-[#0A3CB1] font-[300] rounded-lg w-full px-3 py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id='endDate' type='date' value={education?.to} onChange={handleToInput} required
                />
              </div>
              <div>
                <label class="block text-gray-700 text-md  mb-2" for='description'>
                  Description
                </label>
                <textarea
                  className="appearance-none border border-[#BBD1F5] focus:border-[#0A3CB1] font-[300] rounded-lg w-full px-3 py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id='description' rows={4} placeholder='Enter the description' value={education?.description} onChange={handleDescriptionInput} required
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

export default EStep2