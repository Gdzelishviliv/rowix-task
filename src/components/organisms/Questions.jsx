import React, { useState } from "react";
import SectionHeaderV0 from "../atoms/SectionHeaderV0";
import DropDownV0 from "../molecules/DropDownV0";
import DropDownData from "../../data/dropDown";
import ContactForm from "../molecules/ContactForm";

const Questions = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="mt-[100px] flex flex-col gap-5">
      <SectionHeaderV0 text="Frequently Asked Questions" variant="View All" />
      <div className="flex justify-between">
        <div className="flex flex-col gap-5 w-[1054px] ">
          {DropDownData.map((item) => (
            <DropDownV0
              key={item.id}
              title={item.title}
              subtext={item.subtext}
              open={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Questions;
