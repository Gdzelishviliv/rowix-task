import React from "react";
import ArchiveIcn from "../../assets/ArchiveIcn.svg"

const InfoCard = ({ heading, description }) => {
  return (
    <div className="bg-[#1A1A1A] w-full text-start p-10 rounded-[14px]">
      <div className="flex flex-col gap-3">
        <h3 className="font-flex font-medium text-[30px] text-[#F9EFEC] leading-[150%] uppercase">
          {heading}
        </h3>
        <p className="font-flex text-[18px] text-[#B3B3B2]">{description}</p>
      </div>
      <div className="flex justify-start items-center gap-2.5 mt-10 cursor-pointer">
        <img src={ArchiveIcn} alt="Archive Icon" />
        <p className="font-flex text-[18px] text-[#B3B3B2]">Learn More</p>
      </div>
    </div>
  );
};

export default InfoCard;
