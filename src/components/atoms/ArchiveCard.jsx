import React from "react";

const ArchiveCard = ({ name, number, variants, img }) => {
  const baseStyles =
    "flex flex-col justify-center items-center bg-[#1A1A1A] py-[30px] px-5 uppercase rounded-[14px] w-[280px] h-[180px] gap-2";

  if (variants === "knowMore" || variants === "withImg") {
    return (
      <div className="flex justify-center items-center bg-[#1A1A1A] py-[30px] px-5 uppercase rounded-[14px] w-[280px] h-[180px] gap-2">
        {img && (
          <img
            src={img}
            alt={name}
            className="w-[60px] h-[60px] object-contain mb-2"
          />
        )}
        <h4 className="font-mono text-[18px] font-medium text-[#B3B3B2]">
          {name}
        </h4>
      </div>
    );
  }

  return (
    <div className={baseStyles}>
      <h4 className="font-mono text-[18px] font-medium text-[#B3B3B2]">
        {name}
      </h4>
      {number && (
        <span className="font-mono font-semibold text-[60px] text-[#DA9E8B]">
          {number}
        </span>
      )}
    </div>
  );
};

export default ArchiveCard;
