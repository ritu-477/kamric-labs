import React from 'react';
import Heading from '../common/Heading';
import { UPCOMING_PROJECTS_DATA } from '../utils/helper';
import PrimaryButton from '../common/PrimaryButton';


const UpcomingProjects = () => {


    return (
        <div className="lg:pt-24 md:pt-20 pt-16 lg:pb-[136px] md:pb-20 pb-16 relative" id='down'>
            <div className='absolute size-[182px] rounded-full bg-white blur-[112px] -z-10 shadow-white -right-0 -bottom-[2%] lg:block hidden'></div>
            <div className="container relative">
                <div className="absolute lg:top-[-4.5%] lg:left-[33%] md:top-[-2%] md:left-[28%] left-[15%] top-[-1%]">
                    <img
                        src="/assets/images/webp/heading-line.webp"
                        alt="line"
                        className="md:w-[398px] w-[250px]"
                    />
                </div>
                <Heading
                    text={'Upcoming Projects'}
                    classStyle={'lg:!pb-12 md:!pb-10 !pb-8 text-center'}
                />
                <div className="flex max-lg:flex-wrap justify-center md:gap-[29px] gap-5">
                    {UPCOMING_PROJECTS_DATA.map((obj) => (
                        <div
                            key={obj.index}
                            className="p-4 border rounded-lg backdrop-blur-lg bg-white/10 border-border-gray max-sm:w-full"
                        >
                            <img
                                src={obj.image}
                                alt={obj.title}
                                className="pb-4 w-full pointer-events-none"
                            />
                            <div className="flex justify-between">
                                <p className="font-medium text-base sm:text-xl sm:leading-6 text-white">
                                    {obj.title}
                                </p>
                                <p className="font-bold text-sm sm:text-base leading-5 text-white">
                                    {obj.time}
                                </p>
                            </div>
                            <p className="font-space-grotesk font-light text-sm leading-6 sm:text-base sm:leading-7 text-white">
                                {obj.category}
                            </p>
                        </div>
                    ))}
                </div>
                <PrimaryButton classStyle={'md:mt-12 mt-8 text-white border border-white'} />
            </div>
        </div>
    );
};

export default UpcomingProjects;