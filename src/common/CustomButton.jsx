import React from "react";
const CustomButton = ({ text, classStyle }) => {
    return (
        <button
            className={`bg-white text-black font-semibold rounded-[82px] text-base leading-5 ${classStyle}`}>
            {text}</button>
    );
};

export default CustomButton;