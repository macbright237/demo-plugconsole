import React from "react";

const TaskDescription = ({ title1, description }) => {
  return (
    <div className="font-sans mx-2">
      <div className="pt-2">
        <h3 className="text-2xl pb-1">{title1}</h3>
        <p className="text-[14px] font-[300]">{description}</p>
      </div>
    </div>
  );
};

export default TaskDescription;
