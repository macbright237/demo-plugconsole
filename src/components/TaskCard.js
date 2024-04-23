import React from 'react'
import { useNavigate } from 'react-router-dom'

const TaskCard = ({title, postedSince, budget, description, tags}) => {

  const navigate = useNavigate()

  return (
    <div onClick={() => {navigate('/task_details')}} className='border border-[#eef6ff] cursor-pointer p-6 rounded-lg flex flex-col gap-4' >
      <div className='flex justify-between items-center'>
        <h3 className='text-xl'>{title}</h3>
        <p className='text-[12px] font-[300] text-[#0A3CB1] '>{postedSince}</p>
      </div>
      <div className='flex items-center gap-3'>
        <p className='bg-[#F5FAFF] px-5 py-1 rounded-full text-[12px]'>Canada only</p>
        <p className='text-[12px] text-[#0A3CB1] font-bold '>Budget: {budget}</p>
      </div>
      <p className='text-[13px] font-[300]  '>{description}</p>
      <div className='flex gap-3 flex-wrap'>
        {tags?.map(tag => {
          return(<p className='bg-[#DBEAFE] text-[#0A3CB1] text-[12px] px-5 py-1 rounded-full'>{tag}</p>)
        })}
      </div>
    </div>
  )
}

export default TaskCard