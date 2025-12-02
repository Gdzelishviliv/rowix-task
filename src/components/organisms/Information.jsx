import React from "react";
import InfoCard from "../atoms/InfoCard";
import SectionHeader from "../atoms/SectionHeader";

const Information = () => {
  const CardInfo = [
    {
      heading: "Expertise in Cutting-Edge Technologies",
      description:
        "NexGen ensures your projects are powered by state-of-the-art technologies, guaranteeing innovation and future-proof solutions.",
    },
    {
      heading: "Proven Track Record of Success",
      description:
        "NexGen demonstrates a consistent ability to meet and exceed client expectations, providing reliable and effective web solutions tailored to diverse needs.",
    },
    {
      heading: "Client-Centric Approach",
      description:
        "At NexGen, we prioritize understanding our clients' unique requirements, fostering transparent communication throughout the development process.",
    },
    {
      heading: "Dedicated Team of Professionals",
      description:
        "Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable, and secure web solutions for your business.",
    },
  ];
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
