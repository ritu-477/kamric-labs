import React from 'react'
import { VALUES_CARDS_DATA } from '../utils/helper'
import Heading from '../common/Heading'

export const Values = () => {
  return (
      <div className='lg:pt-[78px] lg:pb-[10px] md:pt-14 md:pb-4 pt-12 py-2'>
          <div className='container'>
                  <img
                      src="/assets/images/webp/heading-line.webp"
                      alt="line"
                      className="lg:w-[398px] md:w-[344px] w-[220px] mx-auto -mb-11 md:-mb-16 lg:-mb-[74px] pointer-events-none"
                  />
              <Heading
                  text={'Values'}
                  classStyle={'text-center'}
              />
              <div className='flex flex-row flex-wrap -mx-3 xl:pt-[77px] md:pt-12 pt-8 max-lg:justify-center'>
                  {VALUES_CARDS_DATA.map((obj, index) => (
                      <div key={index} className='lg:w-[33.33%] sm:w-[50%] w-full px-2 lg:mb-10 sm:mb-6 mb-5 relative group'>
                          <div className='absolute -top-[17px] lg:-top-4 lg:-right-2 xl:-top-6 xl:-right-2 -right-[6px] max-xl:size-16 group-hover:opacity-100 opacity-0 transition-opacity duration-700 -z-10'>
                              <img src={obj.image} alt="circle" className='shadow-shadow-3xl xl:w-[73px] xl:h-[74px] size-16' />
                          </div>
                          <div className="sm:max-w-[369px] lg:min-h-[276px] sm:min-h-[256px] min-h-[200px] h-full xl:p-[19.4px] p-4 border border-light-black rounded-xl hover:shadow-custom-xl hover:border hover:border-dusk-black hover:bg-dusk-black hover:backdrop-blur-[10px] duration-700 z-20">
                              <span>{obj.icon}</span>
                              <h3 className="font-bold text-xl font-space-grotesk leading-custom-2xl text-white lg:py-[10px] py-2">
                                  {obj.title}
                              </h3>
                              {obj.description && (
                                  <p className="font-normal font-space-grotesk text-base text-white xl:max-w-[329px]">
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

export default Values;