import React from "react";
import ArchiveIcn from "../../assets/ArchiveIcn.svg";
import ArchiveCard from "../atoms/ArchiveCard";

const Achivements = () => {
  const AchivementItems = [
    { name: "Clients", number: "200+" },
    { name: "PROJECTS", number: "280+" },
    { name: "HAPPY CLIENTS", number: "100%" },
    { name: "FOLLOWER", number: "420k" },
    { name: "Years Of Experience", number: "10+" },
    { name: "Know More", variants: "withImg", img: ArchiveIcn },
  ];
  return (
    <div className="flex gap-5 border-2 border-[#1F1F1F] p-5 rounded-[20px]">
      {AchivementItems.map((item) => (
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
