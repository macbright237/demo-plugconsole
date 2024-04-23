import React from "react";

const ClientTask = () => {
  return (
    <div>
      <div className="w-[300px] h-[250px] rounded-xl bg-[#023DA5]  flex flex-col items-center py-8 px-4">
        <p className=" text-xl font-bold text-[#FDFDFD]">
          Amplify Your Efficiency
        </p>
        <p className="text-[#E8E8E8] text-xs leading-loose">
          {" "}
          As a client, you'll unlock a seamless workflow that streamlines your
          projects, helping you save time, reduce stress, and boost your overall
          productivity.
        </p>
        <p className="w-48 bg-[#FDFDFD]  text-[#023DA5] font-bold py-4 px-6 rounded text-center mt-8">
          {" "}
          Become a client
        </p>
      </div>
    </div>
  );
};

export default ClientTask;
