const Heading = ({ classStyle, text }) => {
    return (
        <h2 className={`${classStyle} font-light uppercase text-white lg:text-custom-4xl md:leading-custom-4xl md:text-5xl lg:leading-custom-5xl text-3xl`}>{text}</h2>
    )
}

export default Heading