import React from "react";
import ArchiveIcn from "../../assets/ArchiveIcn.svg";
import ArchiveCard from "../atoms/ArchiveCard";
import AchivementItemsData from "../../data/AchievementData";

const Achivements = () => {
  
  return (
    <div className="flex gap-5 border-2 border-[#1F1F1F] p-5 rounded-[20px]">
      {AchivementItemsData.map((item) => (
        <ArchiveCard
          key={item.name}
          name={item.name}
          number={item.number}
          img={item.img}
          variants={item.variants}
        />
      ))}
    </div>
  );
};

export default Achivements;
