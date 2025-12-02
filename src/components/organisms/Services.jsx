import React from "react";
import SectionHeader from "../atoms/SectionHeader";
import ServiceCard from "../atoms/ServiceCard";
import WebDev from "../../assets/WebDev.svg";
import MobileDev from "../../assets/MobileDev.svg";
import WebDesign from "../../assets/WebDesign.svg";
import Digital from "../../assets/Digital.svg";

const Services = () => {
  const ServicesData = [
    {
      icon: WebDesign,
      title: "Web Design",
      description:
        "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.",
      price: "$1,500",
    },
    {
      icon: MobileDev,
      title: "Mobile App Development",
      description:
        "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go.",
      price: "$2,500",
    },
    {
      icon: WebDev,
      title: "Web Development",
      description:
        "Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites.",
      price: "$1,800",
    },
    {
      icon: Digital,
      title: "Digital Marketing",
      description:
        "In the digital age, marketing is a critical aspect of your business's success. Our Digital Marketing service employs data-driven strategies to enhance your brand's visibility",
      price: "$1,200",
    },
  ];
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
