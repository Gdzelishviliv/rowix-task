import React from "react";

const FormInput = ({ label, type, placeholder }) => {
  return (
    <div className="flex flex-col gap-2.5">
      <label className="font-flex text-[18px] uppercase text-[#F3DFD8]">{label}</label>
      <input
        id={label.toLowerCase()}
        type={type}
        className="w-full bg-[#0F0F0F] rounded-[10px] h-[75px] p-6 text-[#F9EFEC] placeholder:text-[#676665] placeholder:font-flex placeholder:text-[18px] outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
