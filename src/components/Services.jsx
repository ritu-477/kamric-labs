import React from 'react'
import Heading from '../common/Heading'
import { SERVICES_CARDS_DATA } from '../utils/helper'

const Services = () => {
    return (
        <div className='relative max-lg:md:pb-[60px] pb-7' id='service'>
            <div className='absolute size-[209px] rounded-full bg-white blur-[110px] -z-10 shadow-white -left-0 bottom-[-130px] lg:block hidden'></div>
            <div className='container'>
                <div className="absolute lg:top-[-3.5%] lg:left-[35.5%] md:top-[-2.5%] md:left-[28%] left-[20%] top-[-1%] ">
                                   <img
                                     src="/assets/images/webp/heading-line.webp"
                                     alt="line"
                                       className="md:w-[398px] sm:w-[250px] w-[220px]"
                                />
                              </div>
                            <Heading
                                text={'Services'}
                                classStyle={'text-center'}
                        />
                <div className='flex flex-row flex-wrap -mx-3 xl:pt-[77px] md:pt-12 pt-8 max-lg:justify-center'>
                    {SERVICES_CARDS_DATA.map((obj, index) => (
                        <div key={index} className='lg:w-[33.33%] sm:w-[50%] w-full px-[8.5px] lg:mb-10 sm:mb-6 mb-5 relative group'>
                            <div className='absolute -top-[17px] xl:-top-6 xl:-right-4 -right-[6px] group-hover:opacity-100 opacity-0 transition-opacity duration-700 -z-10'>
                                <img src={obj.circle} alt="circle" className='md:size-[74px] size-12 shadow-shadow-3xl' />
                            </div>
                            <div className="max-w-[369px] xl:p-5 p-4 border border-transparent rounded-xl hover:shadow-custom-xl hover:border hover:border-dusk-black hover:bg-dusk-black hover:backdrop-blur-[10px] duration-700 z-20">
                                <img
                                    src={obj.image}
                                    alt={obj.title}
                                    className="size-10"
                                /> 
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
                                                <p className='font-normal text-base text-white cursor-pointer'>
                                                    {list.text || list.textTwo || list.textThree || list.textFour || list.textFive || list.textSix}
                                                </p>
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