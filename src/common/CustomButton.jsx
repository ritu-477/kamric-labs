import React from 'react';
import { ButtonArrow } from '../utils/Icons';

const CustomButton = ({ text, classStyle, customClass }) => {
    return (
        <button
            className={`text-black rounded-[82px] font-bold sm:text-base text-sm leading-5 ${classStyle}`}
        >
            {text}
            <span className={`${customClass} hidden`}>
                <ButtonArrow />
            </span>
        </button>
    );
};

export default CustomButton;
