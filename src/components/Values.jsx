import React from 'react'
import { VALUES_CARDS_DATA } from '../utils/helper'
import Heading from '../common/Heading'

export const Values = () => {
  return (
      <div className='lg:pt-[78px] lg:pb-[10px] md:pt-20 md:pb-10 pt-12 py-2'>
          <div className='container relative'>
              <div className="absolute lg:-top-[5%] lg:left-[33%] md:-top-[3%] md:left-[28%] left-[20%] top-[-1.5%] ">
                  <img
                      src="/assets/images/webp/heading-line.webp"
                      alt="line"
                      className="lg:w-[398px] md:w-[344px] sm:w-[250px] w-[220px]"
                  />
              </div>
              <Heading
                  text={'Values'}
                  classStyle={'text-center'}
              />
              <div className='flex flex-row flex-wrap -mx-3 xl:pt-[77px] md:pt-12 pt-8 max-lg:justify-center'>
                  {VALUES_CARDS_DATA.map((obj, index) => (
                      <div key={index} className='lg:w-[33.33%] sm:w-[50%] w-full px-2 lg:mb-10 sm:mb-6 mb-5 relative group'>
                          <div className='absolute -top-[17px] xl:-top-6 xl:-right-4 -right-[6px] group-hover:opacity-100 opacity-0 transition-opacity duration-700 -z-10'>
                              <img src={obj.circle} alt="circle" className='md:size-[74px] size-12 shadow-shadow-3xl' />
                          </div>
                          <div className="max-w-[369px] xl:p-5 p-4 border border-transparent rounded-xl hover:shadow-custom-xl hover:border hover:border-dusk-black hover:bg-dusk-black hover:backdrop-blur-[10px] duration-700 z-20">
                              <img
                                  src={obj.image}
                                  alt={obj.title}
                                  className="size-10"
                              />
                              <h3 className="font-bold text-xl font-space-grotesk leading-custom-2xl text-white lg:py-[10px] py-2">
                                  {obj.title}
                              </h3>
                              {obj.description && (
                                  <p className="font-normal font-space-grotesk text-base text-white xl:max-w-[321px]">
                                      {obj.description}
                                  </p>
                              )}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
    </div>
  )
}
