import React from 'react'

const PrimaryButton = ({ classStyle }) => {
    return (
        <button className={`px-8 py-[9.2px] flex justify-center mx-auto items-center !font-medium text-sm sm:text-base leading-5 rounded-full transition-all duration-700 ease-in-out
${classStyle}`}>
            View All
      </button>
  )
}

export default PrimaryButton