import React from 'react'
import Heading from '../common/Heading'
import Description from '../common/Description'

const WhoIsKarmic = () => {
    return (
        <div className='lg:pb-[156px] pb-32 relative'>
            <img className='absolute top-[-207px] right-0 max-w-[226px] w-full lg:block hidden blur-[-40px]' src="/assets/images/webp/karmic-ellipse.webp" alt="karmic-ellipse" />
            <div className="container relative lg:pt-20 sm:pt-16">
                <div className="absolute lg:top-[12%] lg:left-[35.5%] md:top-[-3%] md:left-[28%] left-[15%] top-[-1%] lg:block hidden">
                    <img
                        src="/assets/images/webp/heading-line.webp"
                        alt="line"
                        className="md:w-[344px] w-[250px]"
                    />
                </div>
                <Heading classStyle={'text-center'} text={'Who is karmic?'}
                />
                <Description classStyle={'max-w-[532px] mx-auto text-center pb-[2px] text-white pt-2'} text={'We are builders, innovaters, and believers.'} />
                <Description classStyle={'max-w-[532px] mx-auto text-center text-white'} text={'We believe in a future that rests in your hands, and yours alone. The future is decentralized, The future is web3.'} />
                <div className="flex max-xl:flex-wrap pt-10 max-xl:justify-center items-center max-w-[1140px] mx-auto w-full">
                    <img className='max-w-[369px] max-xl:max-w-[300px] max-lg:max-w-[329px]' src="/assets/images/webp/digital-art.webp" alt="digital" />
                    <img className='max-w-[369px] max-xl:max-w-[300px] max-lg:max-w-[329px]' src="/assets/images/webp/collection-art.webp" alt="collection" />
                    <img className='max-w-[369px] max-xl:max-w-[300px] max-lg:max-w-[329px]' src="/assets/images/webp/tokyo-ten.webp" alt="tokyo" />
                </div>
            </div>
        </div>
    )
}

export default WhoIsKarmic