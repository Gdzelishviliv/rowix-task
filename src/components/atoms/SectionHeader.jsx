import React from "react";

const SectionHeader = ({ text }) => {
  return (
    <div className="font-flex p-[50px] font-semibold h-[156px] text-[48px] text-[#F9EFEC] bg-[#1A1A1A] w-full rounded-2xl uppercase">
      {text}
    </div>
  );
};

export default SectionHeader;
