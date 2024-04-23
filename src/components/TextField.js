import React, { useState } from 'react'
import { Eye, EyeSlash } from 'react-bootstrap-icons'

const TextField = ({id, inputType, placeholder, inputLabel, isRequired, value, onChange}) => {
  const [showPassword, setShowPassword] = useState(inputType)
  const content = (inputType === 'password' ? 
  (
    <div>
      { inputLabel &&
        <label className="block text-gray-700 text-md mb-2  " htmlFor={id}>
          {inputLabel}
        </label>
      }
      <div className="relative">
        <div className="absolute inset-y-0   right-3 flex items-center pl-3 ">
          { showPassword === 'password' ?
            <Eye  aria-hidden="true" className="w-5 h-5 text-gray-500 cursor-pointer" onClick={() => {setShowPassword('text')}}/>
            : <EyeSlash  aria-hidden="true" className="w-5 h-5 text-gray-500 cursor-pointer"  onClick={() => {setShowPassword('password')}}/>
          }
        </div>
        <input 
          type={showPassword}
          id={id}
          value={value}
          onChange={onChange}
          className="appearance-none border border-[#BBD1F5] rounded-lg block w-full px-3 py-4 pr-12  focus:border-[#0A3CB1] text-gray-700 leading-tight focus:outline-none focus:shadow-outline  " 
          required={isRequired}
          placeholder={placeholder}
        />             
      </div>
    </div>
  ): 
  (
    <div>
      <label className="block text-gray-700 text-md  mb-2" htmlFor={id}>
        {inputLabel} {isRequired && <span className='text-[#DC2626]'>*</span>}
      </label>
      <input 
        className="appearance-none border border-[#BBD1F5] focus:border-[#0A3CB1] font-[300] rounded-lg w-full px-3 py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        id={id}
        value={value}
        onChange={onChange}
        type={inputType}  
        required={isRequired}
        placeholder={placeholder}
      />
    </div>
  ))
  return content
}

export default TextField