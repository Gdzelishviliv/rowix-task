import React from "react";
import ArrowRight from "../../assets/ArrowRight.svg";

const FooterNewsletter = () => {
  return (
    <div className="flex justify-between items-center rounded-2xl p-[50px] h-[182px] bg-[#1A1A1A]">
      <div className="flex flex-col gap-2.5">
        <span className="text-[#676665] font-mono text-[18px] uppercase">
          Newsletter
        </span>
        <h2 className="text-[#F9EFEC] text-[30px] uppercase font-medium">
          Subscribe To our Newsletter
        </h2>
      </div>
      <div className="flex gap-5 items-center">
        <input
          className="bg-transparent border-b-2 py-[18px] w-[320px] px-5 placeholder:text-[#676665] placeholder:font-flex placeholder:text-[18px] border-[#333333]"
          type="text"
          placeholder="Enter your email"
        />
        <img src={ArrowRight} alt="Arrow Right" width={52} />
      </div>
    </div>
  );
};

export default FooterNewsletter;
