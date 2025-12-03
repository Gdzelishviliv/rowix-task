import React from "react";

const V1 = [
  "Digital Marketing",
  "Website Design",
  "Branding",
  "Website Development",
  "Mobile App Development",
];

const V2 = [
  "Follow Us on Social Media",
  "Follow Us on Social Media",
  "Follow Us on Social Media",
  "Follow Us on Social Media",
];

const TickerAnimation = ({ version }) => {
  const items = version === "v2" ? V2 : V1;

  return (
    <div
      className={`
        flex justify-center items-center h-[70px] font-mono rounded-[20px] 
        overflow-hidden relative 
        ${version === "v2" ? "bg-[#1A1A1A] mx-0 mb-0" : "bg-[#0F0F0F] mx-5 mb-5 mt-[90px]"}
      `}
    >
      <div
        className="absolute top-0 flex animate-ticker-horizontal"
        style={{ "--ticker-duration": "20s" }}
      >
        {[...items, ...items].map((text, index) => (
          <div
            key={index}
            className="flex items-center gap-5 text-[#676665] font-mono text-[20px] h-[70px] pl-5 shrink-0"
          >
            <span className="w-2 h-2 rounded-full bg-[#CE7D63]"></span>
            <span className="whitespace-nowrap">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerAnimation;
