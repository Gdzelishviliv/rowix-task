import React from "react";
import SectionHeader from "../atoms/SectionHeader";
import ServiceCard from "../atoms/ServiceCard";
import ServicesData from "../../data/Services";

const Services = () => {
  return (
    <div className="flex flex-col gap-5 border-2 border-[#1F1F1F] p-5 rounded-[20px] mt-[100px]">
      <SectionHeader text="Our Services" />
      <div className="grid grid-cols-2 gap-5">
        {ServicesData.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            price={service.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
