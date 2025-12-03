import React from "react";

const FooterCopyright = () => {
  return (
    <div className="flex justify-between items-center rounded-2xl h-[127px] bg-[#1A1A1A] p-[50px]">
      <span className="text-[#B3B3B2] font-mono text-[18px] ">
        © 2024 NextGen. All rights reserved.
      </span>
      <div className="text-[#B3B3B2] font-mono text-[18px]">
        Terms & Conditions <span className="text-[#232329]">|</span> Privacy Policy
      </div>
    </div>
  );
};

export default FooterCopyright;
