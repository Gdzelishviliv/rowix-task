import React from "react";
import SocialCard from "../atoms/SocialCard";
import SocialsData from "../../data/Socials";

const Socials = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      {SocialsData.map((social, index) => (
        <SocialCard
          key={social.title + index}
          icon={social.icon}
          title={social.title}
          description={social.description}
        />
      ))}
    </div>
  );
};

export default Socials;
