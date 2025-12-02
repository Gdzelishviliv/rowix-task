import React from "react";

const HeaderButton = ({ name, variants }) => {
  const baseStyles =
    "flex justify-center items-center h-[63px] px-6 py-[18px] rounded-xl cursor-pointer";
  const styles =
    variants === "contact"
      ? "text-[#0F0F0F] bg-[#CE7D63]"
      : "text-[#81807E] hover:text-[#E7BEB1] bg-[#0F0F0F]";
  return <button className={`${baseStyles} ${styles}`}>{name}</button>;
};

export default HeaderButton;
