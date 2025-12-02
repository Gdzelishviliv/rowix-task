import React from "react";

const texts = [
  "Digital Marketing",
  "Website Design",
  "Branding",
  "Website Development",
  "Mobile App Development",
];

const TickerAnimation = () => {
  return (
    <div className="flex justify-center items-center h-[70px] bg-[#0F0F0F] font-mono mt-[90px] mb-5 mx-5 rounded-[20px] overflow-hidden relative">
      <div
        className="absolute top-0 flex animate-ticker-horizontal"
        style={{ "--ticker-duration": "20s" }}
      >
        {[...texts, ...texts].map((text, index) => (
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
