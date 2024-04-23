import React from 'react'

const PopularSearch = () => {
  return (
    <div className='bg-[#F5FAFF] p-4 flex flex-col gap-4 rounded-xl '>
      <h3 className='text-3xl font-[300]'>Popular Search</h3>
      <div className='flex justify-between items-center'>
        <p className='text-[13px] font-[300]'>DevOps Engineer </p>
        <p className='bg-[#DBEAFE] text-[#0A3CB1] text-[12px]  px-5 py-1 rounded-full'>{'200 Tasks'}</p>
      </div>
      <div className='flex justify-between items-center'>
        <p className='text-[13px] font-[300]'>Product design</p>
        <p className='bg-[#DBEAFE] text-[#0A3CB1] text-[12px]  px-5 py-1 rounded-full'>{'200 Tasks'}</p>
      </div>
      <div className='flex justify-between items-center'>
        <p className='text-[13px] font-[300]'>Front-end development</p>
        <p className='bg-[#DBEAFE] text-[#0A3CB1] text-[12px]  px-5 py-1 rounded-full'>{'200 Tasks'}</p>
      </div>
      <div className='flex justify-between items-center'>
        <p className='text-[13px] font-[300]'>Back-end development </p>
        <p className='bg-[#DBEAFE] text-[#0A3CB1] text-[12px]  px-5 py-1 rounded-full'>{'200 Tasks'}</p>
      </div>
      <div className='flex justify-between items-center'>
        <p className='text-[13px] font-[300]'>Full-stack development</p>
        <p className='bg-[#DBEAFE] text-[#0A3CB1] text-[12px]  px-5 py-1 rounded-full'>{'200 Tasks'}</p>
      </div>
      <div className='flex justify-between items-center'>
        <p className='text-[13px] font-[300]'>Wordpress</p>
        <p className='bg-[#DBEAFE] text-[#0A3CB1] text-[12px]  px-5 py-1 rounded-full'>{'200 Tasks'}</p>
      </div>
    </div>
  )
}

export default PopularSearch