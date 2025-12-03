import React from 'react'
import Socials from '../molecules/Socials'
import FooterTop from '../molecules/FooterTop'
import FooterNewsletter from '../molecules/FooterNewsletter'
import FooterCopyright from '../molecules/FooterCopyright'

const Footer = () => {
  return (
    <div className='flex gap-5'>
        <Socials />
        <div className='w-[1053px] flex flex-col gap-5'>
            <FooterTop />
            <FooterNewsletter />
            <FooterCopyright />
        </div>
    </div>
  )
}

export default Footer