/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, X, XLg } from 'react-bootstrap-icons'
import { skills } from '../../redux/slice/userSlice'
import { useSelector } from 'react-redux'

const EStep4 = ({ setCurrentStep }) => {
  const [mySkills, setMySkills] = useState(['Docker', 'React', 'PHP', 'CSS'])
  const allSkills = useSelector(skills)

  const removeSkill = (skl) => {
    const arr = mySkills.filter(x => x !== skl)
    setMySkills(arr)
  }

  return (
    <div>
      <div className='flex flex-col gap-4'>
        <div>
          <h4 className='text-2xl font-bold'>Add Skill</h4>
          <p className='text-[#737373] text-sm font-[300]'>
            Lorem ipsum dolor sit amet consectetur. Neque
            elementum nulla eu ultrices egestas ac vitae arcu sem.
            Odio mauris bibendum euismod pulvinar lacus tortor ligula.
            Est ultrices est nullam dictum in. Sit tellus eu adipiscing
            natoque facilisis feugiat gravida nunc. Ac a scelerisque
            enim nec.
          </p>
        </div>
        <div className='flex flex-col gap-4'>
          <p>Tags</p>
          <div className='border border-[#0A3CB1] p-2 rounded-md flex gap-2 flex-wrap'>
            {mySkills.map(skill => {
              return (
                <div className=' bg-[#BBD1F5] rounded-md p-3 flex items-center gap-3'>
                  <p>{skill}</p>
                  <X className='cursor-pointer' onClick={() => removeSkill(skill)}/>
                </div>
              )
            })}
          </div>
          <div className='bg-white py-5 px-4 rounded-md flex flex-col gap-4'>
            <h5>Suggessions</h5>
            <div className='flex gap-2 flex-wrap'>
              {allSkills.map(skill => {
                return (
                  <div className='border border-[#A1A1A1] bg-[#E8E8E8] rounded-md p-3 flex items-center gap-3 cursor-pointer'>
                    <p>{skill?.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className='flex gap-3 self-end'>
          <button onClick={() => { setCurrentStep(3) }} className='bg-[#BBD1F5] py-3 cursor-pointer rounded-sm text-sm text-[#0A3CB1]  flex items-center gap-2 px-5'>
            <ChevronLeft />
            Professional Background
          </button>
          <button onClick={() => { setCurrentStep(5) }} className='bg-[#0A3CB1] py-3 cursor-pointer rounded-sm text-sm text-white  flex items-center gap-2 px-5'>
            Add Your Experiences
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default EStep4