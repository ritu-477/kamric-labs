const Heading = ({ classStyle, text }) => {
    return (
        <h2 className={`${classStyle} font-light uppercase text-white lg:text-5xl lg:leading-custom-5xl md:text-3xl text-2xl`}>{text}</h2>
    )
}

export default Heading