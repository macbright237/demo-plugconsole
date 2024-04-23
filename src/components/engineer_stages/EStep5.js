import React from 'react'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'

const EStep5 = ({setCurrentStep}) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex gap-3 self-end'>
          <button onClick={() => { setCurrentStep(4) }} className='bg-[#BBD1F5] py-3 cursor-pointer rounded-sm text-sm text-[#0A3CB1]  flex items-center gap-2 px-5'>
            <ChevronLeft />
            Professional Background
          </button>
          <button onClick={() => { }} className='bg-[#0A3CB1] py-3 cursor-pointer rounded-sm text-sm text-white  flex items-center gap-2 px-5'>
            Finish
            <ChevronRight />
          </button>
        </div>
    </div>
  )
}

export default EStep5