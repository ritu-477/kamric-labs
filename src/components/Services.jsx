
import React from 'react'
import { SERVICES_DATA } from '../utils/helper'
import Heading from '../common/Heading'

const Services = () => {
    return (
        <div className='relative'>
            <div className='absolute size-[209px] rounded-full bg-white blur-[110px] -z-10 shadow-white -left-0 bottom-[-130px] lg:block hidden'></div>
            <div className='container relative' id='service'>
                <div className="absolute lg:top-[-2%] lg:left-[33%] md:top-[-2.5%] md:left-[28%] left-[20%] top-[-1%] ">
                    <img
                        src="/assets/images/webp/heading-line.webp"
                        alt="line"
                        className="md:w-[344px] sm:w-[250px] w-[220px]"
                    />
                </div>
                <Heading
                    text={'Services'}
                    classStyle={'text-center'}
                />
                <div className='flex flex-row flex-wrap -mx-3 xl:pt-[77px] md:pt-12 pt-8 max-lg:justify-center'>
                    {SERVICES_DATA.map((obj, index) => (
                        <div key={index} className='lg:w-[33.33%] sm:w-[50%] w-full px-[10.5px] lg:mb-10 sm:mb-6 mb-5 relative group'>
                            <div className='absolute -top-[18px] right-0 sm:-right-6 -z-10 hidden group-hover:block transition-all duration-700 ease-in-out'>
                                <img src={obj.circle} alt="circle" className='sm:w-[73px] sm:h-74px] size-12' />
                            </div>
                            <div className="xl:p-5 p-4 border border-transparent rounded-xl hover:shadow-custom-xl hover:border hover:border-border-gray hover:bg-dusk-black hover:backdrop-blur-lg hover:bg-white/10 duration-700 z-20">
                                <img
                                    src={obj.image}
                                    alt={obj.name}
                                    className="size-10"
                                />
                                <h3 className="font-bold text-xl leading-custom-4xl text-white lg:pt-5 pt-4 pb-[6px]">
                                    {obj.title}
                                </h3>
                                <p className="font-normal text-base text-white xl o[]:max-w-[329px]">{obj.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services