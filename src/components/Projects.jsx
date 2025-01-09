import React, { useState, useEffect } from 'react';
import Heading from '../common/Heading';
const Projects = () => {
    return (
        <div className='bg-cover bg-center bg-no-repeat bg-project-bg xl:h-[902px] pt-[130px] sm:pt-[99px] lg:pb-[160px] pb-32' id='projects'>
            <div className="container relative">
                <div className="absolute lg:top-[-2%] lg:left-[35.5%] md:top-[-3%] md:left-[28%] left-[15%] top-[-1%] lg:block hidden">
                    <img
                        src="/assets/images/webp/heading-black-line.webp"
                        alt="black-line"
                        className="md:w-[344px] w-[250px]"
                    />
                </div>
                <Heading
                    text={'Projects'}
                    classStyle={'lg:!pb-2 text-center !text-black'}
                />
                <p className='text-base max-w-[532px] mx-auto text-center leading-custom-xl font-normal font-space-grotesk'>Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna id nisl quis vestibulum rhoncus.</p>
                <div className="flex-col pt-[53px]">
                    <div className='flex max-xl:flex-wrap max-xl:justify-center gap-4 mb-4'>
                        <img className='max-w-[273px] max-xl:max-w-[212px] max-lg:max-w-[273px] hover:scale-110 transition-all duration-500' src="/assets/images/webp/project-one-image.webp" alt="image-one" />
                        <img className='max-w-[273px] max-xl:max-w-[212px] max-lg:max-w-[273px] hover:scale-110 transition-all duration-500' src="/assets/images/webp/project-two-image.webp" alt="image-two" />
                        <img className='max-w-[273px] max-xl:max-w-[212px] max-lg:max-w-[273px] hover:scale-110 transition-all duration-500' src="/assets/images/webp/project-three-image.webp" alt="image-three" />
                        <img className='max-w-[273px] max-xl:max-w-[212px] max-lg:max-w-[273px] hover:scale-110 transition-all duration-500' src="/assets/images/webp/project-four-image.png" alt="image-four" />
                    </div>
                    <div className='flex max-xl:flex-wrap max-xl:justify-center gap-4'>
                        <img className='max-w-[273px] max-xl:max-w-[212px] max-lg:max-w-[273px] hover:scale-110 transition-all duration-500' src="/assets/images/webp/project-five-image.webp" alt="image-five" />
                        <img className='max-w-[273px] max-xl:max-w-[212px] max-lg:max-w-[273px] hover:scale-110 transition-all duration-500' src="/assets/images/webp/project-six-image.webp" alt="image-six" />
                        <img className='max-w-[273px] max-xl:max-w-[212px] max-lg:max-w-[273px] hover:scale-110 transition-all duration-500' src="/assets/images/webp/project-seven-image.webp" alt="seven" />
                        <img className='max-w-[273px] max-xl:max-w-[212px] max-lg:max-w-[273px] hover:scale-110 transition-all duration-500' src="/assets/images/webp/project-eight-image.webp" alt="image-eight" />
                    </div>
                    <button className="mt-14 px-8 py-3 border border-black hover:text-white flex justify-center mx-auto items-center text-black font-medium text-base leading-5 rounded-full hover:bg-gray-500">
                        View All
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Projects