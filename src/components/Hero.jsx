import React from 'react'
import Description from '../common/Description'
import CustomButton from '../common/CustomButton'
import { ButtonArrow } from '../utils/Icons'

const Hero = () => {
  return (
      <div className='bg-hero-layer bg-no-repeat bg-cover min-h-[726px]'>
          <div className='container'>
              <div className='lg:flex-row flex-col flex justify-between lg:pt-[173px] pt-[100px]'>
                  <div className='lg:w-[570px] w-full'>
                      <div className='flex flex-col'>
                          <h1 className='lg:text-custom-5xl lg:leading-custom-5xl sm:text-5xl text-4xl text-white uppercase'>We are believers decentralization and Web3.
                              <span className='relative'>
                                  <img
                                      className='absolute -top-3 right-0 max-w-[158px] w-full'
                                      src=""
                                      alt='top-line'
                                  />
                                  Web3.
                                  <img
                                      className='absolute -bottom-[2px] left-2 max-w-[169px] w-full'
                                      src=""
                                      alt='bottom-line'
                                  />
                              </span>
                          </h1>
                          <Description classStyle={'lg:max-w-[495px] pt-1'} text={'Vulputate tristique habitant neque, accumsan. Vitae ultrices nulla erat nibh aliquam, quis tempus volutpat arcu. Leo convallis luctus dis malesuada turpis non consequat ac.'} />
                          <div>
                              <CustomButton classStyle={'py-3 px-6'} text={'Get Started'} customClass="!block"/> 
                          </div>
                       </div>
                  </div>
               </div>
          </div>
    </div>
  )
}

export default Hero