import React from 'react'



const TaskSuggestion = ({ time, description, country, price }) => {
  return (
    <div className='border-2 border-[#DBEAFE] gap-1 p-3 rounded-lg flex flex-col mx-4'>
      <p className='text-[12px] font-[300] text-[#0A3CB1] '>{time}</p>
      <div>I{description}</div>
      <div className='flex flex-row gap-2 items-center'>
        <div className='bg-[#DBEAFE] px-5 py-1 rounded-full text-[12px]'>{country}</div>
        <p className='text-[12px] text-[#0A3CB1] font-bold '>Budget: {price}</p>
      </div>
    </div>
  )
}

export default TaskSuggestion