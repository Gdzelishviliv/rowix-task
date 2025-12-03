import React from 'react'
import ArrowRight from "../../assets/ArrowRight.svg";

const SectionHeaderV0 = ({text , variant}) => {
  return (
    <div className="flex justify-between items-center font-flex p-[50px] font-semibold h-[156px] text-[48px] text-[#F9EFEC] bg-[#1A1A1A] w-full rounded-2xl uppercase">
      {text}
      <div className='flex gap-2.5 items-center cursor-pointer'>
        <img src={ArrowRight} alt="Arrow Right" />
        <p className='font-mono font-medium text-[20px] uppercase'>{variant}</p>
      </div>
    </div>
  )
}

export default SectionHeaderV0