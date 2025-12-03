import React from "react";
import FormInput from "../atoms/FormInput";
import OrangeButton from "../atoms/OrangeButton";

const ContactForm = () => {
  return (
    <div className="bg-[#1A1A1A] rounded-[14px] p-[60px] min-w-[746px] flex flex-col gap-10">
      <h2 className="uppercase border-b border-[#262626] pb-[50px] font-flex  font-medium text-[24px] text-[#F9EFEC]">
        ask your question
      </h2>
      <div className="flex flex-col gap-5">
        <FormInput label="Name" type="text" placeholder="Enter your name" />
        <FormInput label="Email" type="email" placeholder="Enter your email" />
        <div className="flex flex-col gap-2.5">
          <label className="font-flex text-[18px] uppercase text-[#F3DFD8]">
            Your Question
          </label>
          <textarea
            rows={4}
            className="w-full bg-[#0F0F0F] rounded-[10px] px-6 py-4 resize-none text-[#F9EFEC] placeholder:text-[#676665] placeholder:font-flex placeholder:text-[18px] outline-none h-[172px]"
            placeholder="Enter Your Question Here ....."
          />
        </div>
      </div>
      <OrangeButton text="Send Your Message" />
    </div>
  );
};

export default ContactForm;
