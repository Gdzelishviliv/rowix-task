import React from "react";

const OrangeButton = ({text}) => {
  return (
    <button className="text-[#0F0F0F] uppercase flex justify-center items-center bg-[#CE7D63] h-[63px] rounded-xl font-flex font-medium text-[18px] w-full cursor-pointer">
      {text}
    </button>
  );
};

export default OrangeButton;
