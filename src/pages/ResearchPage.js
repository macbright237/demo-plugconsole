import React, { useState } from 'react'
import NewsLetterSubscribe from '../components/NewsLetterSubscribe'
import MultiRangeSlider from "multi-range-slider-react";
import PopularSearch from '../components/PopularSearch'
import TaskCard from '../components/TaskCard'
import TextField from '../components/TextField'

const ResearchPage = () => {
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  return (
    <div className='w-[90%] max-w-[1300px] mx-auto py-3 flex flex-col sm:flex-row justify-between gap-4 mt-8 '>
      <div className='bg-[#F5FAFF] w-full sm:w-4/12 md:w-3/12 h-fit p-6 flex flex-col gap-4 rounded-xl '>
        <div>
          <h3 className='text-xl font-[300]'>Task title</h3>
          <TextField id='text' inputType="text" placeholder={'Devops engineering'} />
        </div>
        <div className='flex flex-col gap-3 my-3'>
          <p className='text-[#737373] text-[14px] font-[600] mb-5'>More options</p>
          <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-[#94A3B8] bg-transparent border-0 border-b-[1px] border-[#A1A1A1] focus:outline-none focus:ring-0 focus:border-[#A1A1A1] peer">
            <option selected>Choose a Term</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-[#94A3B8] bg-transparent border-0 border-b-[1px] border-[#A1A1A1] focus:outline-none focus:ring-0 focus:border-[#A1A1A1] peer">
            <option selected>Choose a Term</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className='py-4'>
          <h3 className='text-lg font-[300]'>Budget</h3>
          <MultiRangeSlider
            min={0}
            max={100}
            step={5}
            ruler={false}
            thumbLeftColor='#1070C8'
            thumbRightColor='#1070C8'
            barInnerColor='#1070C8'
            className='!shadow-none !border-none [&>.bar-left]:!shadow-none'
            minValue={minValue}
            maxValue={maxValue}
            onInput={(e) => {
              handleInput(e);
            }}
          />
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='text-lg font-[300]'>Date Posted</h3>
          <div>
            <div class="flex items-center mb-4">
              <input id="budegt-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-[#0A3CB1] !focus:outline-none bg-gray-100 border-gray-300 focus:ring-[#0A3CB1]  focus:ring-2" />
              <label htmlFor="budegt-radio-1" class="ml-2 text-md font-[300] text-gray-900 dark:text-gray-300">Last Hour</label>
            </div>
            <div class="flex items-center mb-4">
              <input id="budegt-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-[#0A3CB1] bg-gray-100 border-gray-300 focus:ring-[#0A3CB1]  focus:ring-2" />
              <label htmlFor="budegt-radio-2" class="ml-2 text-md font-[300] text-gray-900 dark:text-gray-300">Last 24 Hour</label>
            </div>
            <div class="flex items-center mb-4">
              <input id="budegt-radio-3" type="radio" value="" name="default-radio" class="w-4 h-4 text-[#0A3CB1] bg-gray-100 border-gray-300 focus:ring-[#0A3CB1]  focus:ring-2" />
              <label htmlFor="budegt-radio-3" class="ml-2 text-md font-[300] text-gray-900 dark:text-gray-300">Last 7 Days</label>
            </div>
            <div class="flex items-center mb-4">
              <input id="budegt-radio-4" type="radio" value="" name="default-radio" class="w-4 h-4 text-[#0A3CB1] bg-gray-100 border-gray-300 focus:ring-[#0A3CB1]  focus:ring-2" />
              <label htmlFor="budegt-radio-4" class="ml-2 text-md font-[300] text-gray-900 dark:text-gray-300">Last 14 Days</label>
            </div>
            <div class="flex items-center mb-4">
              <input id="budegt-radio-5" type="radio" value="" name="default-radio" class="w-4 h-4 text-[#0A3CB1] bg-gray-100 border-gray-300 focus:ring-[#0A3CB1]  focus:ring-2" />
              <label htmlFor="budegt-radio-5" class="ml-2 text-md font-[300] text-gray-900 dark:text-gray-300">Last 30 Days</label>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-lg font-[300]'>Skills</h3>
            <div className='flex flex-col gap-4'>

              <div class="flex items-center">
                <input id="skill-checkbox-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2  " />
                <label for="skill-checkbox-1" class="ml-2 text-md font-[300] text-gray-900 dark:text-gray-300">AWS</label>
              </div>
              <div class="flex items-center">
                <input id="skill-checkbox-2" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 " />
                <label for="skill-checkbox-2" class="ml-2 text-md font-[300] text-gray-900 dark:text-gray-300">Docker</label>
              </div>
              <div class="flex items-center">
                <input id="skill-checkbox-3" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 " />
                <label for="skill-checkbox-3" class="ml-2 text-md font-[300] text-gray-900 dark:text-gray-300">Teraform</label>
              </div>
              <div class="flex items-center">
                <input id="skill-checkbox-4" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 " />
                <label for="skill-checkbox-4" class="ml-2 text-md font-[300] text-gray-900 dark:text-gray-300">Teraform</label>
              </div>
              <div class="flex items-center">
                <input id="skill-checkbox-5" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 " />
                <label for="skill-checkbox-5" class="ml-2 text-md font-[300] text-gray-900 dark:text-gray-300">Teraform</label>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='w-full sm:w-8/12 md:w-9/12 flex flex-col lg:flex-row justify-between gap-4'>
        <div className='w-full lg:w-8/12'>
          <div className='border  border-[#eef6ff] p-4 md:p-8 rounded-lg flex flex-col gap-5'>
            <div className='flex justify-between items-center'>
              <p className='text-[#737373] text-2xl '>2400 tasks</p>
              <div></div>
            </div>
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
        <div className='w-full lg:w-4/12 flex flex-col gap-7'>
          <NewsLetterSubscribe />
          <PopularSearch />
        </div>
      </div>
    </div>
  )
}

export default ResearchPage