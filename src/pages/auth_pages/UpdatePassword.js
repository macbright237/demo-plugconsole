/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import logo from "../../assets/logo3.png";
import { Link, useNavigate } from "react-router-dom";
const UpdatePassword = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="w-[100%]  items-center sticky top-0 z-50 shadow-md bg-white border-b">
        <div className="flex justify-between  py-5 w-[90%] max-w-[1300px] mx-auto">
          <div className="flex items-center gap-3">
            <img
              onClick={() => {
                navigate("/dashboard");
              }}
              src={logo}
              alt="logo"
              className="h-[30px] "
            />
          </div>
          <div className="flex gap-4 text-lg text-[#0b325a] items-center">
            <p className="text-sm">Already have an account?</p>
            <button className="bg-[#0A3CB1] hover:bg-[#0A3CB1] text-[#FFF]  py-2 px-8 rounded text-sm">
            <Link to={'/login'} >Sign In</Link>
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-[#E8E8E8] flex items-center justify-center w-screen h-screen ">
        <div className="w-[600px] md:w-[600px] h-[400px] border border-inherit rounded-xl lg:p-2 bg-[#FFF] flex">
          <div className=" flex flex-col  items-center justify-center gap-4 p-28">
            <p className="text-3xl text-[#0A3CB1] font-bold">Update Password</p>
            <p className="text-[#737373]">
            Please Select option to send link reset password

            </p>
            <div className="flex flex-col">
            <p className="text-[#737373]">New Password</p>
            <input
              type="password"
              id="password"
              className="block w-[350px] p-4 pl-10  text-start text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Password"
              required
            />
            </div>
            <div className="flex flex-col">
            <p className="text-[#737373]">Confirmation</p>
            <input
              type="password"
              id="password"
              className="block w-[350px] p-4 pl-10  text-start text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Password"
              required
            />
         </div>
            <button className="bg-[#0A3CB1] hover:bg-[#0A3CB1] text-[#FFF] font-bold py-2 px-10 rounded">
             Change Password
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
