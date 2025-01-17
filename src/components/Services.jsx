import React from 'react'
import Heading from '../common/Heading'
import { SERVICES_CARDS_DATA } from '../utils/helper'

const Services = () => {
    return (
        <div className='relative lg:mb-[-77px] lg:pt-[68px] md:pt-14 md:pb-8 pt-12 pb-6' id='service'>
            <div className='absolute size-[226px] rounded-full bg-white blur-[110px] -z-10 shadow-white bottom-[-133px] -left-3 lg:block hidden'></div>
            <div className='container'>
                <img
                    src="/assets/images/webp/heading-line.webp"
                    alt="line"
                    className="lg:w-[398px] md:w-[344px] w-[220px] mx-auto -mb-11 md:-mb-16 lg:-mb-[74px] pointer-events-none"
                />
                <Heading
                    text={'Services'}
                    classStyle={'text-center'} />
                <div className='flex flex-row flex-wrap -mx-3 xl:pt-[77px] md:pt-12 pt-8 max-lg:justify-center'>
                    {SERVICES_CARDS_DATA.map((obj, index) => (
                        <div key={index} className='lg:w-[33.33%] sm:w-[50%] w-full px-[8px] lg:mb-10 sm:mb-6 mb-5 relative group'>
                            <div className='absolute -top-[18px] xl:-right-1 -right-2 group-hover:opacity-100 opacity-0 transition-opacity duration-700 -z-10'>
                                <img src={obj.image} alt="circle" className='xl:w-[73px] xl:h-[74px] size-16 shadow-custom-2xl' />
                            </div>
                            <div className="md:max-w-[369px] lg:min-h-[276px] sm:min-h-[256px] min-h-[200px] h-full xl:p-[19.2px] p-4 border border-transparent rounded-xl hover:shadow-custom-xl hover:border hover:border-dusk-black hover:bg-dusk-black hover:backdrop-blur-[10px] duration-700 z-20">
                                {obj.icon}
                                <h3 className="font-bold text-xl font-space-grotesk leading-custom-2xl text-white lg:pt-5 pt-4 pb-[6px]">
                                    {obj.title}
                                </h3>
                                {obj.description && (
                                    <p className="font-normal font-space-grotesk text-base text-white xl:max-w-[329px]">
                                        {obj.description}
                                    </p>
                                )}
                                {obj.content && obj.content.length > 0 && (
                                    <div>
                                        {obj.content.map((list, item) => (
                                            <div key={item} className='flex items-center '>
                                                <p className='size-1 bg-white rounded-full mx-2'></p>
                                                <a href='#' className='font-normal text-base text-white cursor-pointer font-space-grotesk'>
                                                    {list.text || list.textTwo || list.textThree || list.textFour || list.textFive || list.textSix}
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services;