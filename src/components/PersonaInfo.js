import React from "react";
import { GeoAltFill, PersonFill } from "react-bootstrap-icons";
import JobExperience from "./JobExperience";
import pic1 from "../assets/Frame 4634.png";
import pic2 from "../assets/Frame 4634 (1).png";
import pic3 from "../assets/Frame 4634 (2).png";

const PersonalInfo = ({name, location, description, description1, description2, description3, tasks, years, certificates}) => {
  return (
    <div className="sm:px-4">
      <div className="flex gap-2 py-4">
        <div className='text-[#dcdddf] bg-[#f9f"9f9] text-[130px] h-fit rounded-full p-4 border shadow'>
          <PersonFill />
        </div>
        <div className="">
          <p className=" font-bold text-[30px]">{name}</p>
          <div className="flex flex-row gap-1">
            <div className="pt-2">
            <GeoAltFill className="text-[#0A3CB1]" />
            </div>
            <p className="pt-1 text-[#0A3CB1]">{location}</p>
          </div>
          <p className="text-[#737373]">
            {description}
          </p>
          <p className="text-[#737373]">
            {description1}
           
          </p>
          <p className="text-[#737373]">
            {description2}<b className="text-[#0A3CB1] underline">{description3}</b>
          </p>
        </div>
        <div>
          <button className="py-2 px-4 rounded border-2 border-gray-200 text-gray-500 font-bold">
            Edit profile
          </button>
        </div>
      </div>
      <div className="  flex flex-row gap-20 px-8 py-4 w-full h-[100px] rounded-xl bg-[#fff] text-center">
        <div className=" flex flex-col text-center">
          <p className="text-[#0A3CB1] font-bold text-[20px]">{tasks}</p>
          <p className="text-[#737373]">Completed</p>
        </div>
        <div className=" flex flex-col text-center">
          <p className="text-[#0A3CB1] font-bold text-[20px]">{years}</p>
          <p className="text-[#737373]">Experimented</p>
        </div>
        <div className=" flex flex-col text-center">
          <p className="text-[#0A3CB1] font-bold text-[20px]">
            {certificates}
          </p>
          <p className="text-[#737373]">Archives</p>
        </div>
      </div>
      <div className=" flex flex-row gap-14 py-4">
        <p className="font-bold text-[#737373]">Experience</p>
        <p className="text-[#737373]">Certifications</p>
        <p className="text-[#737373]">Skills</p>
        <p className="text-[#737373]">Portfolio</p>
      </div>
      <hr className="w-full h-1 mx-auto bg-[#737373] border-0 rounded mb-8" />
      <div className="w-full  h-max rounded-xl bg-[#FFF] mb-8">
        <div className="flex flex-row justify-between px-8 py-8">
          <p className=" text-2xl pt-4 text-[#444444]">Job Experience</p>
          <div>
            <button className="py-2 px-4 rounded border-2 border-[#737373] text-[#737373] font-bold">
              {" "}
              + Add More
            </button>
          </div>
        </div>
        <JobExperience
          img={pic1}
          role={"DevOp Engineer - Full time"}
          cname={"Orange - Paris"}
          date={"Dec 2022 - present"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus ex at felis efficitur dictum. Pellentesque varius ullamcorper placerat. Duis venenatis nunc risus, vitae tincidunt odio pellentesque quis. Quisque risus eros, imperdiet in lobortis id, aliquam id dui."
          }
        />
        <JobExperience
          img={pic2}
          role={"DevOp Engineer - Full time"}
          cname={"Orange - Paris"}
          date={"Dec 2022 - present"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus ex at felis efficitur dictum. Pellentesque varius ullamcorper placerat. Duis venenatis nunc risus, vitae tincidunt odio pellentesque quis. Quisque risus eros, imperdiet in lobortis id, aliquam id dui."
          }
        />
        <JobExperience
          img={pic3}
          role={"DevOp Engineer - Full time"}
          cname={"Orange - Paris"}
          date={"Dec 2022 - present"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus ex at felis efficitur dictum. Pellentesque varius ullamcorper placerat. Duis venenatis nunc risus, vitae tincidunt odio pellentesque quis. Quisque risus eros, imperdiet in lobortis id, aliquam id dui."
          }
        />
        <JobExperience
          img={pic1}
          role={"DevOp Engineer - Full time"}
          cname={"Orange - Paris"}
          date={"Dec 2022 - present"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus ex at felis efficitur dictum. Pellentesque varius ullamcorper placerat. Duis venenatis nunc risus, vitae tincidunt odio pellentesque quis. Quisque risus eros, imperdiet in lobortis id, aliquam id dui."
          }
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
