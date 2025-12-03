import React from "react";
import RightArrow from "../../assets/vector.svg";
import TickerAnimation from "./TickerAnimation";

const Question = () => {
  return (
    <>
      <div className="flex justify-between gap-[250px] h-[305px] items-end bg-[#CE7D63] rounded-[20px] p-20">
        <div className="max-w-[1187px]">
          <h2 className="font-flex font-medium text-[58px] uppercase text-[#0F0F0F] min-w-[1324px] leading-[150%]">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-[#262626] text-[18px] font-flex">
            Take the first step towards digital success with NexGen by your
            side. Our team of experts is eager to craft tailored solutions that
            drive growth for your business.
          </p>
        </div>
        <button className="bg-[#0F0F0F] rounded-xl h-[60px] px-[34px] py-[18px] gap-2.5 flex items-center justify-between cursor-pointer">
          <span className="text-[18px] font-flex font-medium uppercase text-[#F3DFD8]">
            Get in Touch
          </span>
          <img src={RightArrow} alt="right arrow" />
        </button>
      </div>
      <TickerAnimation version="v2" />
    </>
  );
};

export default Question;
