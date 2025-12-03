import React from "react";
import RightArrow from "../../assets/RightArrow.svg";

const TestimonialsCard = ({ header, paragraph, image, name, role }) => {
  return (
    <div className="bg-[#1A1A1A] rounded-2xl flex flex-col justify-between gap-10 w-[430px] pt-10">
      <div className="flex flex-col items-start gap-6 px-10">
        <h1 className="font-flex font-medium text-[24px] text-[#F9EFEC] uppercase">
          {header}
        </h1>
        <p className="font-flex font-regular text-[18px] text-[#B3B3B2]">
          {paragraph}
        </p>
      </div>
      <div className="bg-[#1F1F1F] w-full py-[30px] px-10 flex justify-between items-center rounded-b-2xl">
        <div className="flex items-center gap-[15px] ">
          <img src={image} alt={name} />
          <div className="flex flex-col items-start gap-0.5">
            <h5 className="font-flex font-medium text-[20px] text-[#F3DFD8]">
              {name}
            </h5>
            <p className="font-flex text[18px] text-[#81807E]">{role}</p>
          </div>
        </div>
        <img className="cursor-pointer" src={RightArrow} alt="right arrow" />
      </div>
    </div>
  );
};

export default TestimonialsCard;
