import React from 'react'
import { SOCIAL_LINKS } from '../utils/helper'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div className='lg:pt-[50px] md:pt-4 pt-10'>
            <div className='container'>
                <a href="/"><img src="/assets/images/webp/footer-logo.webp" alt="footer-logo" className='lg:max-w-[255px] max-w-[210px] mx-auto xl:pb-[69px] lg:pb-14 pb-9' /></a>
                <div className='flex items-center md:gap-6 gap-4 justify-center pb-4'>
                    {SOCIAL_LINKS.map((obj, index) => (
                        <div className='size-[35px] bg-white rounded-full flex items-center justify-center hover:scale-110 duration-300 ease-linear'>
                            <a
                                key={index}
                                href={obj.link}
                                target='_blank'
                                className='hover:scale-110 duration-300 ease-linear'
                            >
                                {obj.icon}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full border border-white'></div>
            <p className='font-normal text-base leading-7 font-space-grotesk text-white opacity-70 mx-auto text-center lg:pt-4 lg:pb-[18px] py-3'>© Karmic labs {currentYear}</p>
       </div>
    )
}

export default Footer;