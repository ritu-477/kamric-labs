import React from 'react'
import Heading from '../common/Heading'
import { SERVICES_CARDS_DATA } from '../utils/helper'

const Services = () => {
    return (
        <div className='relative lg:mb-[-77px] lg:pt-[68px] md:pt-14 md:pb-8 pt-12 pb-6' id='service'>
            <div className='absolute size-[209px] rounded-full bg-white blur-[110px] -z-10 shadow-white -left-0 bottom-[-130px] lg:block hidden'></div>
            <div className='container max-w-[1185px] relative'>
                <div className="absolute lg:top-[-3.5%] lg:left-[33%] md:top-[-2%] md:left-[28%] left-[20%] top-[-1%] ">
                                   <img 
                                     src="/assets/images/webp/heading-line.webp"
                                     alt="line"
                                       className="lg:w-[398px] md:w-[344px] sm:w-[250px] w-[220px]"
                                />
                              </div>
                            <Heading
                                text={'Services'}
                                classStyle={'text-center'}
                        />
                <div className='flex flex-row flex-wrap -mx-3 xl:pt-[77px] md:pt-12 pt-8 max-lg:justify-center'>
                    {SERVICES_CARDS_DATA.map((obj, index) => (
                        <div key={index} className='lg:w-[33.33%] sm:w-[50%] w-full px-[10px] lg:mb-10 sm:mb-6 mb-5 relative group'>
                            <div className='absolute -top-[17px] lg:-top-4 lg:-right-2 xl:-top-10 xl:-right-6 max-xl:size-16 -right-[6px] group-hover:opacity-100 opacity-0 transition-opacity duration-700 -z-10'>
                                <img src={obj.circle} alt="circle" className='shadow-shadow-3xl' />
                            </div>
                            <div className="md:max-w-[369px] lg:min-h-[276px] sm:min-h-[256px] min-h-[200px] h-full xl:p-[19.4px] p-4 border border-transparent rounded-xl hover:shadow-custom-xl hover:border hover:border-dusk-black hover:bg-dusk-black hover:backdrop-blur-[10px] duration-700 z-20">
                                <span>{obj.icon}</span>
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
                                                <p className='font-normal text-base text-white cursor-pointer font-space-grotesk'>
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