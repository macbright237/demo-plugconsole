import React from 'react'
import { Check2 } from 'react-bootstrap-icons'

const StepComponent = ({ step, title, icon, currentStep }) => {
  return (
    <div className='flex items-center gap-5'>
      {
        currentStep > step ?
          <div className='bg-[#16A34A] text-[25px] rounded-full p-2.5 text-white'>
            <Check2 />
          </div>
          :
          <div className='border border-[#0A3CB1] p-1 rounded-full'>
            <div className='bg-[#BBD1F5] rounded-full p-2.5 text-[#0A3CB1]'>
              {icon}
            </div>
          </div>
      }
      <div className='hidden md:block'>
        <p className='text-[12px] text-[#444444] '>Step {step}</p>
        <p className='font-bold'>{title}</p>
      </div>
    </div>
  )
}

export default StepComponent