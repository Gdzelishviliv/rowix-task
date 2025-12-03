import React from "react";
import Plus from "../../assets/plus.svg";
import Minus from "../../assets/minus.svg";

const DropDownV0 = ({ title, subtext, open, onToggle }) => {
  return (
    <div className="bg-[#1A1A1A] rounded-2xl py-10 px-[60px] flex flex-col justify-between items-center text-center">
      <div className="flex justify-between items-center w-full gap-[50px]">
        <h6
          className={`
    font-flex flex font-medium text-[22px] text-[#F9EFEC]
    w-full
    transition-all duration-300 ease-in-out
    ${
      open
        ? "pb-[30px] border-b border-[#262626] border-opacity-100"
        : "pb-2 border-b border-transparent border-opacity-0"
    }
  `}
        >
          {title}
        </h6>
        <button
          onClick={onToggle}
          aria-expanded={open}
          aria-label={open ? "Collapse" : "Expand"}
          className="mt-4 flex items-center justify-center w-12 h-12 p-0 cursor-pointer"
        >
          <img src={open ? Minus : Plus} alt="toggle icon" />
        </button>
      </div>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 w-full flex ease-in-out ${
          open ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="font-flex text-[18px] text-[#B3B3B2] w-[832px] text-start">
          {subtext}
        </p>
      </div>
    </div>
  );
};

export default DropDownV0;
