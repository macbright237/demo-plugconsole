import React from "react";
import pic5 from '../assets/Frame 4665.png'
const UpgradePlan = () => {
  return (
    <div className="flex flex-col justify-center items-center py-5 gap-4 bg-[#F5FAFF] w-full">

      <img
        className="w-[136px] h-[136px]"
        src={pic5}
        alt=''
      />
      <p className="text-[#0A3CB1] text-center font-bold text-xl">Upgrade to Pro</p>

      <div className="flex">
        <p>orem ipsum dolor sit amet</p>
      </div>
      <div className="flex">
        <p>orem ipsum dolor sit amet</p>
      </div>
      <div className="flex">
        <p>orem ipsum dolor sit amet</p>
      </div>
      <div className="flex">
        <p>orem ipsum dolor sit amet</p>
      </div>
      <p className="w-48 text-[#FDFDFD]  bg-[#023DA5] font-bold py-4 px-6 rounded text-center mt-8">
        {" "}
        Upgrade your plan
      </p>
    </div>
  );
};

export default UpgradePlan;