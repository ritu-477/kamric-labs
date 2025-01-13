import React from 'react';
import Heading from '../common/Heading';
import { UPCOMING_PROJECTS_DATA } from '../utils/helper';
import PrimaryButton from '../common/PrimaryButton';


const UpcomingProjects = () => {


    return (
        <div className="lg:pt-24 md:py-14 lg:pb-[68px] py-12 relative" id='down'>
            <div className='absolute size-[182px] rounded-full bg-white blur-[112px] -z-10 shadow-white -right-0 -bottom-[6%] lg:block hidden'></div>
            <div className="container relative">
                <div className="absolute lg:top-[-4.5%] lg:left-[33%] md:top-[-2%] md:left-[28%] left-[15%] top-[-1%]">
                    <img
                        src="/assets/images/webp/heading-line.webp"
                        alt="line"
                        className="lg:w-[398px] md:w-[344px] w-[250px]"
                    />
                </div>
                <Heading
                    text={'Upcoming Projects'}
                    classStyle={'lg:!pb-12 !pb-10 text-center'}
                />
                <div className="flex max-lg:flex-wrap justify-center xl:gap-[29px] gap-5">
                    {UPCOMING_PROJECTS_DATA.map((obj) => (
                        <div
                            key={obj.index}
                            className="xl:p-4 lg:p-3 p-4 xl:min-h-[334px] border rounded-lg backdrop-blur-lg bg-white/10 border-border-gray max-sm:w-full transition-all duration-700 ease-in-out hover:scale-110">
                            <img
                                width={231}
                                height={234}
                                src={obj.image}
                                alt="card-image"
                                className="w-full sm:max-w-[231px] object-cover rounded-xl"
                            />
                            <div className="flex justify-between pt-[15px]">
                                <p className="font-medium text-base sm:text-xl sm:leading-6 text-white text-nowrap">
                                    {obj.title}
                                </p>
                                <p className="font-bold text-sm sm:text-base leading-5 text-white text-nowrap">
                                    {obj.time}
                                </p>
                            </div>
                            <p className="font-space-grotesk font-light text-sm leading-6 sm:text-base sm:leading-7 text-white">
                                {obj.category}
                            </p>
                        </div>
                    ))}
                </div>
                <PrimaryButton classStyle={'md:mt-12 mt-8 text-white !font-medium transition-all duration-700 ease-in-out hover:bg-white hover:text-dark-black border border-white'} />
            </div>
        </div>
    );
};

export default UpcomingProjects;