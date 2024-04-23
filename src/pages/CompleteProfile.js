/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Briefcase, CardHeading, CreditCardFill, PersonFill, Reception4, UiChecksGrid } from 'react-bootstrap-icons'
import StepComponent from '../components/StepComponent'
import CStep1 from '../components/client_stages/CStep1'
import CStep2 from '../components/client_stages/CStep2'
import CStep3 from '../components/client_stages/CStep3'
import EStep1 from '../components/engineer_stages/EStep1'
import EStep2 from '../components/engineer_stages/EStep2'
import EStep3 from '../components/engineer_stages/EStep3'
import EStep4 from '../components/engineer_stages/EStep4'
import EStep5 from '../components/engineer_stages/EStep5'
import { useDispatch, useSelector } from 'react-redux'
import { currentUser, getEverySkills, getMyEducation, getMyExperience, userRole } from '../redux/slice/userSlice'
import Cookies from 'js-cookie';

const CompleteProfile = () => {
  const myRole = useSelector(userRole)
  const myData = useSelector(currentUser)

  const myToken = Cookies.get('token');
  const dispatch = useDispatch()
  const [completeMyData, setCompleteMyData] = useState({
    firstName: myData?.firstName,
    lastName: myData?.lastName,
    email: myData?.email,
    streetAddress: '',
    country: '',
    city: '',
    state: '',
    postalCode: '',
    bio: '',
  })
  // const myRole = 'client'
  const [currentStep, setCurrentStep] = useState(2)

  useEffect(() => {
    dispatch(getEverySkills())
    dispatch(getMyEducation(myToken))
    dispatch(getMyExperience(myToken))
  }, [])

  return (
    <div className='w-[90%] max-w-[1300px] mx-auto py-16 flex flex-col gap-4'>
      <p className='bg-[#DBEAFE] text-[#0A3CB1] text-[12px] w-fit  px-5 py-1 rounded-full'>Profile</p>
      <h3 className='text-[#0A3CB1] text-5xl font-bold'>Customize your profile</h3>
      <div className='flex gap-5'>
        <div className='bg-[#F5FAFF] w-full md:w-8/12 p-4 rounded-xl '>
          {
            myRole === 'client' ? (
              <div className='flex flex-col gap-4'>
                {
                  currentStep === 1 ? (
                    <CStep1 setCurrentStep={setCurrentStep} />
                  ) : currentStep === 2 ? (
                    <CStep2 setCurrentStep={setCurrentStep} />
                  ) : currentStep === 3 ? (
                    <CStep3 setCurrentStep={setCurrentStep} />
                  ) : null
                }
              </div>
            ) : (
              <div className='flex flex-col gap-4'>
                {
                  currentStep === 1 ? (
                    <EStep1 completeMyData={completeMyData} setCompleteMyData={setCompleteMyData} setCurrentStep={setCurrentStep} />
                  ) : currentStep === 2 ? (
                    <EStep2 setCurrentStep={setCurrentStep} />
                  ) : currentStep === 3 ? (
                    <EStep3 setCurrentStep={setCurrentStep} />
                  ) : currentStep === 4 ? (
                    <EStep4 setCurrentStep={setCurrentStep} />
                  ) : currentStep === 5 ? (
                    <EStep5 setCurrentStep={setCurrentStep} />
                  ) : null
                }
              </div>
            )
          }
        </div>
        <div className='bg-[#F5FAFF] w-fit md:w-4/12 md:min-w-[360px] p-4 min-h-[50vh] rounded-xl '>
          {
            myRole === 'client' ? (
              <div className='flex flex-col gap-2'>
                <StepComponent step={1} title={'Personal Informations'} icon={<PersonFill />} currentStep={currentStep} />
                <div className={`${currentStep > 1 ? 'bg-[#16A34A]' : 'bg-[#0A3CB1]'} w-[3px] rounded-full h-[35px] ml-[21px]`} />
                <StepComponent step={2} title={'Subscription plan'} icon={<UiChecksGrid />} currentStep={currentStep} />
                <div className={`${currentStep > 2 ? 'bg-[#16A34A]' : 'bg-[#0A3CB1]'} w-[3px] rounded-full h-[35px] ml-[21px]`} />
                <StepComponent step={3} title={'Billings and PayOut Informations'} icon={<CreditCardFill />} currentStep={currentStep} />
              </div>
            ) : (
              <div className='flex flex-col gap-2'>
                <StepComponent step={1} title={'Personal Informations'} icon={<PersonFill />} currentStep={currentStep} />
                <div className={` ${currentStep > 1 ? 'bg-[#16A34A]' : 'bg-[#0A3CB1]'} w-[3px] rounded-full h-[35px] ml-[21px]`} />
                <StepComponent step={2} title={'Your formations'} icon={<UiChecksGrid />} currentStep={currentStep} />
                <div className={`${currentStep > 2 ? 'bg-[#16A34A]' : 'bg-[#0A3CB1]'} w-[3px] rounded-full h-[35px] ml-[21px]`} />
                <StepComponent step={3} title={'Your experiences'} icon={<Briefcase />} currentStep={currentStep} />
                <div className={`${currentStep > 3 ? 'bg-[#16A34A]' : 'bg-[#0A3CB1]'} w-[3px] rounded-full h-[35px] ml-[21px]`} />
                <StepComponent step={4} title={'Your skills'} icon={<Reception4 />} currentStep={currentStep} />
                <div className={`${currentStep > 4 ? 'bg-[#16A34A]' : 'bg-[#0A3CB1]'} w-[3px] rounded-full h-[35px] ml-[21px]`} />
                <StepComponent step={5} title={'Summary'} icon={<CardHeading />} currentStep={currentStep} />
              </div>
            )
          }

        </div>
      </div>

    </div>
  )
}

export default CompleteProfile