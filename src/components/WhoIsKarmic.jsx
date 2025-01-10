import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'
import { WHO_KARMIC_DATA } from '../utils/helper'

const WhoIsKarmic = () => {
    return (
        <div className='lg:pb-[156px] md:py-20 max-sm:py-12 lg:pt-20 relative' id='about'>
            <div className='absolute size-[226px] rounded-full bg-white blur-[110px] -z-10 shadow-white top-[-117px] right-0 lg:block hidden'></div>
            <div className="container relative">
                <div className="absolute lg:-top-[3%] lg:left-[37.5%] md:top-[6%] md:left-[28%] left-[15%] top-[-2%]">
                    <img
                        src="/assets/images/webp/heading-line.webp"
                        alt="line"
                        className="md:w-[344px] w-[250px]"
                    />
                </div>
                <Heading
                    classStyle={'text-center'}
                    text={'Who is karmic?'}
                />
                <Description
                    classStyle={'max-w-[532px] mx-auto text-center max-sm:pt-5 pb-[2px] text-white pt-3'}
                    text={'We are builders, innovaters, and believers.'}
                />
                <Description
                    classStyle={'max-w-[532px] mx-auto text-center text-white'}
                    text={'We believe in a future that rests in your hands, and yours alone. The future is decentralized, The future is web3.'}
                />
                <div className="flex max-xl:flex-wrap pt-10 max-xl:justify-center items-center max-w-[1140px] mx-auto w-full gap-4">
                    {WHO_KARMIC_DATA.map((image, index) => (
                        <img
                            key={index}
                            className='max-w-[369px] max-xl:max-w-[300px] max-lg:max-w-[329px] rounded-lg border border-border-white shadow-shadow-xl hover:border-transparent transition-all duration-500'
                            src={image.src}
                            alt={image.alt}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhoIsKarmic