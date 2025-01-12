import React from 'react'
import Heading from '../common/Heading'; 
import { PROJECTS_LISTS } from '../utils/helper'
import PrimaryButton from '../common/PrimaryButton';

const Projects = () => {
    return (
        <div className='bg-center bg-no-repeat max-lg:bg-white lg:bg-project-bg xl:h-[902px] py-12 md:py-14 lg:pt-[99px] lg:pb-[121.5px] lg:project-bg-set bg-hero-bg-set' id='projects'>
            <div className='container relative'>
                <div className="absolute xl:top-[-4.5%] lg:-top-[3%] lg:left-[33.5%] md:top-[-1%] md:left-[33%] left-[20%] top-[-0.5%]">
                         <img
                                        src="/assets/images/webp/heading-black-line.webp"
                                      alt="black-line"
                                     className="lg:w-[398px] lg: md:w-[270px] w-[220px]"
                                   />
                           </div>
                               <Heading
                                  text={'Projects'}
                                 classStyle={'lg:!pb-2 text-center !text-black'}
                              />
                <p className='text-base max-w-[532px] mx-auto text-center leading-6 font-normal font-space-grotesk pt-4'>Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna id nisl quis vestibulum rhoncus.</p>
                <div className="flex flex-wrap justify-center gap-y-6 w-full max-w-[1140px] mx-auto sm:pt-10 pt-8 md:pt-12 lg:pt-[53px] max-md:pt-4">
                    {PROJECTS_LISTS.map((obj, i) => (
                        <div
                            key={i}
                            className="lg:w-3/12 flex md:w-4/12 sm:w-6/12 w-full px-[7px]">
                            <div
                                className='max-w-[273px] mx-auto hover:scale-[1.15] xl:hover:scale-125 hover:!z-20 overflow-hidden group transition-all relative duration-300 cursor-pointer flex w-full rounded-lg justify-center'
                            >
                                <img
                                    width={273}
                                    height={174}
                                    className="w-full rounded-lg pointer-events-none object-cover"
                                    src={obj.image}
                                    alt="projects-image"
                                />
                                <div className="absolute min-h-[47px] flex justify-center items-center shadow-shadow-2xl bg-dark-gray transition-all duration-300 w-full group-hover:bottom-0 bottom-[-50%]">
                                    <p className="text-white text-base leading-5 sm:text-xl sm:leading-custom-3xl font-bold">
                                        {obj.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex justify-center pt-14 max-lg:pt-10 max-md:pt-8'>
                    <PrimaryButton classStyle={'text-dark-black border border-black transition-all duration-700 ease-in-out hover:text-white hover:bg-black'} />
                </div>
            </div>
            </div>
    )
}

export default Projects;