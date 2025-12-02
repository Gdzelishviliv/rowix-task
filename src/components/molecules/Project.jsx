import React from "react";
import ArrowRight from "../../assets/ArrowRight.svg";

const Project = ({
  icon,
  title,
  category,
  time,
  description,
  image,
  techStack,
  members,
}) => {
  return (
    <div className="flex gap-5 border-2 border-[#1F1F1F] rounded-[20px] p-5 mt-5">
      <div className="flex flex-col justify-between bg-[#1A1A1A] px-10 py-[60px] rounded-[14px] h-[426px] w-[579px]">
        <div className="flex justify-between">
          <div className="flex gap-3.5 items-center">
            <img src={icon} alt={title} />
            <h3 className="font-flex font-medium text-2xl uppercase text-[#F9EFEC]">
              {title}
            </h3>
          </div>
          <div className="flex gap-2.5 items-center cursor-pointer">
            <img src={ArrowRight} alt="arrow right" />
            <span className="text-[#B3B3B2] font-medium font-mono text-[20px] uppercase">
              details
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-start">
          <div className="flex gap-2 items-center bg-[#1F1F1F] px-4 py-2.5 rounded-[45px]">
            <span className="text-[#B3B3B2] font-flex text-[18px]">
              Category
            </span>
            <span className="rounded-full border-4 text-[#CE7D63]"></span>
            <p className="font-flex font-medium text-[#E6E6E6] text-[18px]">
              {category}
            </p>
          </div>
          <div className="flex gap-2 items-center bg-[#1F1F1F] px-4 py-2.5 rounded-[45px]">
            <span className="text-[#B3B3B2] font-flex text-[18px]">
              Time Taken
            </span>
            <span className="rounded-full border-4 text-[#CE7D63]"></span>
            <p className="font-flex font-medium text-[#E6E6E6] text-[18px]">
              {time}
            </p>
          </div>
        </div>
        <p className="font-flex text-[18px] text-[#B3B3B2]">{description}</p>
      </div>
      <img src={image} alt={title} width={579} />
      <div className="flex flex-col justify-between gap-5 w-[579px]">
        <div className="bg-[#1A1A1A] rounded-[14px] p-10 h-[225px]">
          <h3 className="font-flex font-medium text-[18px] text-[#FFFFFF] uppercase">
            Technologies Used
          </h3>
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-[#1F1F1F] text-[#E6E6E6] font-flex text-[16px] px-4 py-2.5 rounded-[45px] mr-2.5 mt-2"
            >
              {tech.name}
            </span>
          ))}
        </div>
        <div className="bg-[#1A1A1A] rounded-[14px] px-10 py-5 flex items-center justify-between h-[90px]">
          <h3 className="font-flex font-medium text-[18px] text-[#FFFFFF] uppercase">
            Team Members
          </h3>
          <div className="flex gap-2.5 mr-8">
            {members.map((member, index) => (
              <div key={index}>
                <img src={member.icn} alt={`Member ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <button className="text-[#0F0F0F] uppercase flex justify-center items-center bg-[#CE7D63] h-[63px] rounded-xl font-flex font-medium text-[18px] w-full cursor-pointer">
          Book A Call
        </button>
      </div>
    </div>
  );
};

export default Project;
