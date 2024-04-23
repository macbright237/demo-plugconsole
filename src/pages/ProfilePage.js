import React from "react";
import { useNavigate } from "react-router-dom";
import PersonalInfo from "../components/PersonaInfo";
import ClientTask from "../components/ClientTask";
import UpgradePlan from "../components/UpgradePlan";

const ProfilePage = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex justify-between gap-5 mt-4 w-[90%] max-w-[1300px] mx-auto flex-col md:flex-row">
      <div className="flex w-full md:w-5/12 lg:w-4/12 flex-col gap-3">
        <div className=" h-[340px] rounded-xl bg-[#F5FAFF] ">
          <div className="flex flex-col gap-8 p-2 lg:p-4 mt-4 group-hover:hidden">
            <p>Personal Information</p>

            <p>Account Details</p>
            <p>Billing details</p>
            <p>Update plan</p>
            <p>Chats Settings</p>
          </div>
          <p
            onClick={() => navigate("#")}
            className=" hidden group-hover:block cursor-pointer text-sm text-[#0A3CB1] font-semibold w-full border border-[#0A3CB1] rounded-sm  bg-[#FEF4E9] p-2 lg:p-4 mt-4 text-center "
          >
            {" "}
            Personal Information
          </p>
        </div>
        <div className=" h-[340px] rounded-xl bg-[#F5FAFF]  ">
          <div className=" flex flex-col gap-8 p-2 lg:p-4 mt-4">
            <p>Privacy policy</p>
            <p>Terms and conditions</p>
            <p>Contact support </p>
            <p>Feedback</p>
            <p>Other settings option 3</p>
          </div>
        </div>
      </div>
      <div className=" w-full md:w-7/12 lg:w-10/12 h-full rounded-xl bg-[#F5FAFF] flex">
        <PersonalInfo
          name={"Elisabeth Reddington"}
          location={"Quebec, Canada"}
          description={"Lorem ipsum dolor sit amet consectetur.Orci "}
          description1={
            "Id auctor varius nibh mus ut aliquam aliquam. Orci"
          }
          description2={"vel..."}
          description3={"Read More"}
          tasks={"160 Tasks"}
          years={"5+ Years Job."}
          certificates={"16 Certificates"}
        />
      </div>
      <div className="flex w-full md:w-6/12 lg:w-5/12 flex-col gap-4">
        <ClientTask />
        <UpgradePlan />
      </div>
    </div>
  );
};

export default ProfilePage;
