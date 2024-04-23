/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import SignupStep1 from '../../components/signup_stages/SignupStep1'
import SignupStep2 from '../../components/signup_stages/SignupStep2'
import SignupStep3 from '../../components/signup_stages/SignupStep3'
import SignupStep4 from '../../components/signup_stages/SignupStep4'
import { useDispatch, useSelector } from 'react-redux'
import { clientRegister, engineerRegister, userMessage, userRequestsStatus } from '../../redux/slice/userSlice'
import { toast } from 'react-toastify'

const Signup = () => {

  const errNotify = (err) => err?.length > 0 && toast?.error(err);
  const [currentStage, setCurrentStage] = useState(1)
  const requestStatus = useSelector(userRequestsStatus)
  const usrError = useSelector(userMessage)
  const [myRole, setMyRole] = useState('')
  const dispatch = useDispatch()
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '+237',
    password: '',
  })

    useEffect(() => {
    if (requestStatus === "failed") {
      console.log(usrError);
      if (Array.isArray(usrError)) {
        usrError.forEach((err) => {
          errNotify(err)
        })
      } else errNotify(usrError);
    }
  }, [requestStatus])

  const handleSubmit = async () => {
    try {
      if (myRole === 'client') {
        dispatch(clientRegister(data))
      } else if (myRole === 'engineer') {
        dispatch(engineerRegister(data))
      }
    } catch (err) {
      if (!err) {
        errNotify('No Server Response')
      } else if (err?.status === 400) {
        errNotify('Missing Username or Password')
      } else if (err?.status === 401) {
        errNotify('Unauthorized')
      } else if (err?.status === 500) {
        errNotify(err?.data?.error?.message)
      } else {
        errNotify('Something Went Wrong')
      }
    }
  }

  return (
    <div className=''>
      {
        currentStage === 1 ? <SignupStep1 setCurrentStage={setCurrentStage} setMyRole={setMyRole} myRole={myRole} />
          : currentStage === 2 ? <SignupStep2 setCurrentStage={setCurrentStage} setData={setData} data={data} />
            : currentStage === 3 ? <SignupStep3 setCurrentStage={setCurrentStage} data={data} handleSubmit={handleSubmit} />
              : currentStage === 4 && <SignupStep4 setCurrentStage={setCurrentStage} setData={setData} data={data} />
      }
    </div>
  )
}

export default Signup