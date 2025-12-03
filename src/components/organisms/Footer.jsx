import React from 'react'
import Socials from '../molecules/Socials'
import FooterTop from '../molecules/FooterTop'

const Footer = () => {
  return (
    <div className='flex gap-5'>
        <Socials />
        <div className='w-[1053px]'>
            <FooterTop />
        </div>
    </div>
  )
}

export default Footer