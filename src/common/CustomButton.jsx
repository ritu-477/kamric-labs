// import React from "react";
// const CustomButton = ({ text, classStyle }) => {
//     return (
//         <button
//             className={`bg-white text-black font-semibold rounded-[82px] text-base leading-5 ${classStyle}`}>
//             {text}</button>
//     );
// };

// export default CustomButton;
import React from 'react';
import { ButtonArrow } from '../utils/Icons';

const CustomButton = (props) => {
    return (
        <button
            className={`bg-white text-black lg:py-3 py-2 xl:px-8 lg:px-7 px-5 rounded-[82px] font-bold lg:text-base text-sm leading-[20px] ${props.className}`}
        >
            {props.text.classStyle}
            <span className={`${props.customClass} hidden`}>
                <ButtonArrow />
            </span>
        </button>
    );
};

export default CustomButton;