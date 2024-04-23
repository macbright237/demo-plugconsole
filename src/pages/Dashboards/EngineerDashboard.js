import React, { useState } from 'react'
import { Search, XLg } from 'react-bootstrap-icons'
import TaskCard from '../../components/TaskCard'
import NewsLetterSubscribe from '../../components/NewsLetterSubscribe'
import PopularSearch from '../../components/PopularSearch'

const EngineerDashboard = () => {
  const [search, setSearch] = useState()
  const handleSearchInput = (e) => setSearch(e.target.value)
  return (
    <div>
      <div className='bg-[#F5FAFF]'>
        <div className='w-[90%] max-w-[1300px] mx-auto py-16 flex flex-col gap-3'>
          <h2 className='text-[#0A3CB1] text-4xl font-[300]'>Discover Your Next Task</h2>
          <p className='text-sm font-[300]'>Unlock Your Potential and Unleash Your Talents with Exciting Opportunities!</p>
          <div className='bg-white shadow-md'>
            <div className="relative flex items-center gap-3 px-4 py-2">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search aria-hidden="true" className="w-5 h-5 text-gray-500" />
              </div>
              <input
                value={search}
                onChange={handleSearchInput}
                type="text"
                id="search"
                className="block w-full p-4 pl-10 text-sm border-none text-gray-900 outline-none bg-white focus:border-none"
                placeholder="Task title or keywords"
                required
              />
              <button onClick={() => { setSearch('') }} className='flex gap-2 items-center font-[300]'>Clear <XLg /></button>
              <button onClick={() => { }} className='bg-[#0A3CB1] py-2 w-[150px] px-2 rounded-md font-bold text-white'>Search</button>
            </div>
            <hr />
            <div className='flex justify-between items-center gap-5 px-4 py-3'>
              <div className='flex gap-5 flex-wrap'>
                <select id="countries" class="bg-white border border-[#64748B] text-[#94A3B8] outline-none text-sm rounded-lg focus:ring-blue-500  block  p-2.5 ">
                  <option selected>Individual or Company</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                <select id="countries" class="bg-white border border-[#64748B] text-[#94A3B8] outline-none text-sm rounded-lg focus:ring-blue-500  block  p-2.5 ">
                  <option selected>Long time</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                <select id="countries" class="bg-white border border-[#64748B] text-[#94A3B8] outline-none text-sm rounded-lg focus:ring-blue-500  block  p-2.5 ">
                  <option selected>Price or budget</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>

              <button className='text-sm font-[300]'>Clear all</button>

            </div>
          </div>
        </div>
      </div>

      <div className='w-[90%] max-w-[1300px] mx-auto py-3 flex flex-col md:flex-row justify-between gap-6 mt-8 '>
        <div className='w-full md:w-8/12'>
          <div className='flex justify-between items-center py-2 px-8'>
            <p className='text-[#737373] text-2xl '>2400 tasks</p>
            <div></div>
          </div>
          <div className='border border-[#eef6ff] p-4 md:p-8 rounded-lg flex flex-col gap-5'>
            <TaskCard
              title={'Manage my AWS account'}
              postedSince={'2 hours ago'}
              budget={'$ 200'}
              description={'Lorem ipsum dolor sit amet consectetur. Neque elementum nulla eu ultrices egestas ac vitae arcu sem. Odio mauris bibendum euismod pulvinar lacus tortor ligula. Est ultrices est nullam dictum in. Sit tellus eu adipiscing natoque facilisis feugiat gravida nunc. Ac a scelerisque enim nec.'}
              tags={['Long time', 'Web developper', 'Other keywords']}
            />
            <TaskCard
              title={'Integrating content and configuring a wordpress theme'}
              postedSince={'2 hours ago'}
              budget={'$ 60'}
              description={'Lorem ipsum dolor sit amet consectetur. Neque elementum nulla eu ultrices egestas ac vitae arcu sem. Odio mauris bibendum euismod pulvinar lacus tortor ligula. Est ultrices est nullam dictum in. Sit tellus eu adipiscing natoque facilisis feugiat gravida nunc. Ac a scelerisque enim nec.'}
              tags={['Long time', 'Web developper', 'Other keywords']}
            />
            <TaskCard
              title={'Improve Website'}
              postedSince={'2 hours ago'}
              budget={'$ 200'}
              description={'Lorem ipsum dolor sit amet consectetur. Neque elementum nulla eu ultrices egestas ac vitae arcu sem. Odio mauris bibendum euismod pulvinar lacus tortor ligula. Est ultrices est nullam dictum in. Sit tellus eu adipiscing natoque facilisis feugiat gravida nunc. Ac a scelerisque enim nec.'}
              tags={['Long time', 'Web developper', 'Other keywords']}
            />
            <TaskCard
              title={'Need google policy checked and fixed for website'}
              postedSince={'2 hours ago'}
              budget={'$ 200'}
              description={'Lorem ipsum dolor sit amet consectetur. Neque elementum nulla eu ultrices egestas ac vitae arcu sem. Odio mauris bibendum euismod pulvinar lacus tortor ligula. Est ultrices est nullam dictum in. Sit tellus eu adipiscing natoque facilisis feugiat gravida nunc. Ac a scelerisque enim nec.'}
              tags={['Long time', 'Web developper', 'Other keywords']}
            />
          </div>
        </div>
        <div className='w-full md:w-4/12 mt-12 flex flex-col gap-7'>
          <NewsLetterSubscribe />
          <PopularSearch />
        </div>
      </div>
    </div>
  )
}

export default EngineerDashboard