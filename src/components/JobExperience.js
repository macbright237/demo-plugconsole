import React from 'react'


const JobExperience = ({img, role, cname, description, date}) => {
  return (
<div>

        <div className=" px-8 flex  flex-row  justify-between py-4">
          <div className="flex flex-row gap-2">
            <div>
              <img className="" src={img} alt="live classes" />
            </div>
            <div className="">
              <p className=" font-bold   text-[#737373]">
                {role}
              </p>
              <div className="flex flex-row gap-1">
                <p className="pt-1 text-[#737373] text-sm">{cname}</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[#737373] text-sm font-bold ">{date}</p>
          </div>
        </div>
        <div className="px-4">
          <p className="text-sm text-[#737373] pl-16">
      {description}
          </p>
        </div>
</div>
  )
}

export default JobExperience