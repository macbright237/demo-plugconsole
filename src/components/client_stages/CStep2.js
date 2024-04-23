import React, { useState } from 'react'
import { Check2, ChevronLeft, ChevronRight } from 'react-bootstrap-icons'

const CStep2 = ({ setCurrentStep }) => {
  const [freePlan, setFreePlan] = useState(true)
  return (
    <div>
      <div className='flex flex-col gap-4'>
        <div>
          <h4 className='text-2xl font-bold'>Select Subscription Plan</h4>
          <p className='text-[#737373] text-sm font-[300]'>
            Lorem ipsum dolor sit amet consectetur. Neque
            elementum nulla eu ultrices egestas ac vitae arcu sem.
            Odio mauris bibendum euismod pulvinar lacus tortor ligula.
            Est ultrices est nullam dictum in. Sit tellus eu adipiscing
            natoque facilisis feugiat gravida nunc. Ac a scelerisque
            enim nec.
          </p>
        </div>
        <div className='flex gap-4'>
          <div className='bg-white w-6/12 flex flex-col gap-8 p-4'>
            <div className='flex items-center gap-4'>
              <p className='text-sm font-[300]'>natoque feugiat gravida nunc. Ac a scelerisque</p>
              <div className='bg-[#0A3CB1] text-[10px] rounded-full p-[4px] text-white'>
                <Check2 />
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <p className='text-sm font-[300]'>natoque feugiat gravida nunc. Ac a scelerisque</p>
              <div className='bg-[#0A3CB1] text-[10px] rounded-full p-[4px] text-white'>
                <Check2 />
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <p className='text-sm font-[300]'>natoque feugiat gravida nunc. Ac a scelerisque</p>
              <div className='bg-[#D0D0D0] text-[10px] rounded-full p-[4px] text-white'>
                <Check2 />
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <p className='text-sm font-[300]'>natoque feugiat gravida nunc. Ac a scelerisque</p>
              <div className='bg-[#D0D0D0] text-[10px] rounded-full p-[4px] text-white'>
                <Check2 />
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <p className='text-sm font-[300]'>natoque feugiat gravida nunc. Ac a scelerisque</p>
              <div className='bg-[#D0D0D0] text-[10px] rounded-full p-[4px] text-white'>
                <Check2 />
              </div>
            </div>
          </div>
          <div className='flex flex-col w-6/12 gap-3'>
            <div onClick={() => { setFreePlan(true) }} className={`p-5 flex flex-col gap-6 border-[2px] border-[#0A3CB1] rounded-lg cursor-pointer ${freePlan ? 'bg-[#0A3CB1] text-white' : 'bg-none'}`}>
              <div className='flex justify-between'>
                <h4 className=' text-xl'>Free</h4>
                <p className='text-xl'>0 $ <span className='text-sm font-[300]'>/ month</span></p>
              </div>
              <p className='text-sm font-[300]'>
                Tincidunt ligula ac commodo nulla auctor pulvinar. Ac arcu urna in rhoncus viverra mauris pretium volutpat tincidunt senectus.
              </p>
            </div>
            <div onClick={() => { setFreePlan(false) }} className={`p-5 flex flex-col gap-6 border-[2px] border-[#0A3CB1] rounded-lg cursor-pointer ${!freePlan ? 'bg-[#0A3CB1] text-white' : 'bg-none'}`}>
              <div className='flex justify-between'>
                <h4 className=' text-xl'>Full assistance</h4>
                <p className='text-xl'>100 $ <span className='text-sm font-[300]'>/ month</span></p>
              </div>
              <p className='text-sm font-[300]'>
                Tincidunt ligula ac commodo nulla auctor pulvinar. Ac arcu urna in rhoncus viverra mauris pretium volutpat tincidunt senectus.
              </p>
            </div>
          </div>
        </div>
        <div className='flex gap-3 self-end'>
          <button onClick={() => {setCurrentStep(1) }} className='bg-[#BBD1F5] py-3 cursor-pointer rounded-sm text-sm text-[#0A3CB1]  flex items-center gap-2 px-5'>
            <ChevronLeft />
            Professional Background
          </button>
          <button onClick={() => {setCurrentStep(3)}} className='bg-[#0A3CB1] py-3 cursor-pointer rounded-sm text-sm text-white  flex items-center gap-2 px-5'>
            Add Your Experiences
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CStep2