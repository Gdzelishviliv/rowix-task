import React from "react";
import ArrowRight from "../../assets/ArrowRight.svg";
const ServiceCard = ({ icon, title, description, price }) => {
  return (
    <div className="flex flex-col gap-[50px] bg-[#1A1A1A] w-full text-start p-20 rounded-[14px]">
      <div className="flex justify-between">
        <div className="flex gap-[10.5px] items-center">
          <img src={icon} alt={title} />
          <h4 className="font-flex text-[30px] font-medium uppercase text-[#F9EFEC] leading-[150%]">
            {title}
          </h4>
        </div>
        <div className="flex justify-end items-center gap-2.5 cursor-pointer">
          <img src={ArrowRight} alt="Arrow Right" />
          <p className="font-flex text-[20px] font-medium text-[#B3B3B2] uppercase">
            Book A Call
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="font-flex text-[18px] font-regular text-[#B3B3B2]">
          {description}
        </p>
        <p className="font-flex text-[30px] font-medium uppercase text-[#F9EFEC] text-end">
          starts from {price}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
