import React from "react";
import HomeContainerImage from "../../assets/HomeContainer.svg";
import HomeSecondImage from "../../assets/HomeSecondImage.svg";
const Home = () => {
  return (
    <div className="flex gap-5">
      <div className="bg-[#1A1A1A] rounded-[20px] pt-[100px] px-20">
        <img
          src={HomeContainerImage}
          alt="home svg"
          width={1047}
          height={238}
        />
        <p className="text-[#676665] text-[18px] font-regular font-flex">
          At NexGen, we believe in the transformative power of digital
          solutions. Our team of experts is dedicated to helping businesses like
          yours thrive in the fast-paced digital landscape.
        </p>
      </div>
      <div className="flex flex-col rounded-[20px] relative">
        <img
          className="rounded-t-[14px]"
          src={HomeSecondImage}
          alt="second home svg"
          width={593}
          height={465}
        />
        <div className="flex flex-col gap-1 p-[30px] rounded-b-[14px] bg-[#1F1F1F]">
          <h4 className="font-medium text-2xl text-[#F9EFEC] uppercase font-flex">
            Estatein Real Estate
          </h4>
          <p className="text-[#B3B3B2] text-[18px] font-regular font-flex">
            Web Development.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
