import React from "react";

import NewsLetterSubscribe from "../components/NewsLetterSubscribe";
import PopularSearch from "../components/PopularSearch";
import TaskSuggestion from "../components/TaskSuggestion";
import TaskDescription from "../components/TaskDescription";
import { Bookmark } from "react-bootstrap-icons";
const TaskDetails = () => {
  return (
    <div className=" w-[90%] max-w-[1300px] mx-auto flex justify-between flex-col md:flex-row  gap-6  my-9">
      <div className="w-full md:w-7/12 lg:w-8/12  rounded-xl h-fit  py-10 px-3 flex flex-col gap-10  border border-inherit">
        <div className="flex justify-between sm:px-5">
          <div className="flex flex-col px-4">
            <p className="text-[#0A3CB1] text-3xl pb-2">
              Manage by AWS account
            </p>
            <div className="flex gap-2">
              <div className="bg-[#DBEAFE] px-5 py-1 rounded-full text-[12px]">
                canada only
              </div>
              <p className="text-[#0A3CB1]">Budget:$ 200</p>
            </div>
          </div>
          <div className="bg-[#F9F8FF] w-[42px] h-[42px] rounded-full flex items-center justify-center ">
            <Bookmark className="text-[22px]" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <TaskDescription
            title1={"Task Description"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget risus urna. Vestibulum consequat, leo vel interdum euismod, turpis augue ultricies velit, sit amet semper velit nisi eget ante. Duis efficitur, arcu ut tincidunt ultrices, metus velit suscipit lacus, ac placerat mauris tellus quis nunc. Duis sit amet nibh eget lorem auctor accumsan. Quisque sed tempus ipsum. Vivamus et viverra leo."
            }
          />
          <TaskDescription
            title1={"Objectives and Goals"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget risus urna. Vestibulum consequat, leo vel interdum euismod, turpis augue ultricies velit, sit amet semper velit nisi eget ante. Duis efficitur, arcu ut tincidunt ultrices, metus velit suscipit lacus, ac placerat mauris tellus quis nunc. Duis sit amet nibh eget lorem auctor accumsan. Quisque sed tempus ipsum. Vivamus et viverra leo."
            }
          />
          <TaskDescription
            title1={"Requirements"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget risus urna. Vestibulum consequat, leo vel interdum euismod, turpis augue ultricies velit, sit amet semper velit nisi eget ante. Duis efficitur, arcu ut tincidunt ultrices, metus velit suscipit lacus, ac placerat mauris tellus quis nunc. Duis sit amet nibh eget lorem auctor accumsan. Quisque sed tempus ipsum. Vivamus et viverra leo."
            }
          />
          <TaskDescription
            title1={"Deadline"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget risus urna. Vestibulum consequat, leo vel interdum euismod, turpis augue ultricies velit, sit amet semper velit nisi eget ante. Duis efficitur, arcu ut tincidunt ultrices, metus velit suscipit lacus, ac placerat mauris tellus quis nunc. Duis sit amet nibh eget lorem auctor accumsan. Quisque sed tempus ipsum. Vivamus et viverra leo."
            }
          />
          <TaskDescription
            title1={"Dependencies"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget risus urna. Vestibulum consequat, leo vel interdum euismod, turpis augue ultricies velit, sit amet semper velit nisi eget ante. Duis efficitur, arcu ut tincidunt ultrices, metus velit suscipit lacus, ac placerat mauris tellus quis nunc. Duis sit amet nibh eget lorem auctor accumsan. Quisque sed tempus ipsum. Vivamus et viverra leo."
            }
          />
          <TaskDescription
            title1={"Additional Resources"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget risus urna. Vestibulum consequat, leo vel interdum euismod, turpis augue ultricies velit, sit amet semper velit nisi eget ante. Duis efficitur, arcu ut tincidunt ultrices, metus velit suscipit lacus, ac placerat mauris tellus quis nunc. Duis sit amet nibh eget lorem auctor accumsan. Quisque sed tempus ipsum. Vivamus et viverra leo."
            }
          />
        </div>
        <button className='font-bold py-4 px-12 w-[200px] rounded bg-[#0A3CB1] text-[#FFF] mx-2 my-8'>Apply Now</button>
      </div>
      <div className="flex w-full md:w-5/12 lg:w-4/12 flex-col gap-4">
        <div className="  rounded-xl bg-[#F5FAFF] py-3  flex flex-col gap-2  ">
          <p className="text-3xl px-3 ">Task Suggestion</p>
          <TaskSuggestion
            time={"2 hours ago"}
            description={"Lorem ipsum dolor sit amet consectetur. Neque"}
            country={"France only"}
            price={"$ 200"}
          />
          <TaskSuggestion
            time={"2 hours ago"}
            description={"Lorem ipsum dolor sit amet consectetur. Neque"}
            country={"France only"}
            price={"$ 200"}
          />
          <TaskSuggestion
            time={"2 hours ago"}
            description={"Lorem ipsum dolor sit amet consectetur. Neque"}
            country={"France only"}
            price={"$ 200"}
          />
          <TaskSuggestion
            time={"2 hours ago"}
            description={"Lorem ipsum dolor sit amet consectetur. Neque"}
            country={"France only"}
            price={"$ 200"}
          />
          <button className=' w-[98px] h-[40px] rounded bg-[#0A3CB1] text-[#FFF] self-center '>View More</button>
        </div>
        <div className="flex  flex-col gap-4">
          <PopularSearch />
          <NewsLetterSubscribe />
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
