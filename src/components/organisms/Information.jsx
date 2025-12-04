import React from "react";
import InfoCard from "../atoms/InfoCard";
import SectionHeader from "../atoms/SectionHeader";
import CardInfo from "../../data/infoData";

const Information = () => {
  return (
    <div className="flex flex-col gap-5 border-2 border-[#1F1F1F] p-5 rounded-[20px] mt-[100px]">
      <SectionHeader text="Reasons to Choose NexGen for Your Digital Journey" />
      <div className="flex gap-5">
        {CardInfo.map((card, index) => (
          <InfoCard
            key={index}
            heading={card.heading}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Information;
