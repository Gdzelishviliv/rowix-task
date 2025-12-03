import React from 'react'
import ArrowRight from "../../assets/ArrowRight.svg";

const SocialCard = ({icon, title, description}) => {
  return (
    <div className='bg-[#1A1A1A] rounded-[14px] p-10 flex flex-col gap-20'>
        <div className='flex items-center justify-between'>
            <img src={icon} alt={"icon"} />
            <img src={ArrowRight} alt="Arrow Right" />
        </div>
        <div>
            <h4 className='uppercase font-flex font-medium text-[30px] text-[#F9EFEC]'>{title}</h4>
            <p className='text-[18px] font-flex text-[#B3B3B2]'>{description}</p>
        </div>
    </div>
  )
}

export default SocialCard