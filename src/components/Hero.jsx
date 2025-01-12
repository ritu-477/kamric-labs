import React from 'react'
import Description from '../common/Description'
import CustomButton from '../common/CustomButton'
import { DownArrow } from '../utils/icons'

const Hero = () => {
    return (
        <div className='lg:bg-hero-layer bg-hero-bg-set bg-no-repeat max-lg:bg-center lg:min-h-[726px] relative max-lg:bg-light-gray' id='home'>
            <div className='container'>
                <div className='lg:flex-row flex-col flex justify-between lg:pt-[125px] max-lg:py-14 max-sm:py-12 gap-8'>
                    <div className='lg:w-[570px] w-full flex flex-col justify-center'>
                        <div className='flex flex-col justify-center max-lg:items-center'>
                            <h1 className='lg:text-custom-5xl font-thin lg:leading-custom-5xl sm:text-5xl sm:leading-custom-4xl text-4xl text-white uppercase lg:max-w-[570px] max-lg:text-center'>We are believers decentralization <img className='ms-[167px] -mt-2 max-w-[158px] w-full lg:block hidden' src="/assets/images/webp/hero-second-line.webp" alt="second-line" /> And Web3.
                                <img className='ms-[150px] -mt-3 max-w-[169px] w-full lg:block hidden' src="/assets/images/webp/hero-first-line.webp" alt="first-line" />
                            </h1>
                            <Description classStyle={'lg:max-w-[570px] pt-[13px] max-lg:text-center'} text={'Vulputate tristique habitant neque, accumsan. Vitae ultrices nulla erat nibh aliquam, quis tempus volutpat arcu. Leo convallis luctus dis malesuada turpis non consequat ac.'} />
                            <div className='flex  sm:pt-10 pt-5 sm:gap-8 gap-5'>
                                <CustomButton classStyle="!py-[9.2px] !px-[23.7px] bg-white text-dark-black flex items-center gap-[10px] hover:bg-transparent border border-white hover:text-white group transition-all duration-500" text="Get Started" customClass="!block fill-black group-hover:fill-white group-hover:translate-x-0.5 transition-all duration-500" />
                                <CustomButton text="Read More" classStyle="!py-[9.2px] !px-[31.5px] font-thin bg-transparent text-white border border-white hover:bg-white hover:text-black transition-all duration-500" />
                            </div>

                        </div>
                    </div>
                    <div className='lg:w-[398px] w-full flex max-lg:justify-center max-lg:items-center'>
                        <img width={398} height={446.7} className='max-w-[398px] pointer-events-none w-full object-cover' src="/assets/images/webp/hero-image.webp" alt="hero-image" />
                    </div>
                    <a href='#down' className='absolute bottom-[64px] left-[50%] lg:block hidden'>
                        <DownArrow />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;