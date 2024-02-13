import React, { useContext } from 'react'
import { PageContext } from "src/utils/context";


const Heading = ({children, size, className}) => {

    const { background_color } = useContext(PageContext)

    const text_color = background_color === "bg-black" ? "text-white" : "text-black";

    switch(size) {

        case 'h1':
            return <h1 className={`font-display uppercase text-7xl lg:text-8xl tracking-normal leading-[0.8] ${text_color} ${className ? className : ""} mb-3`}>{children}</h1>
        case 'h2':
            return <h2 className={`font-display uppercase text-4xl lg:text-5xl tracking-normal leading-[0.8] ${text_color} ${className ? className : ""} mb-3`}>{children}</h2>
        case 'h3':
            return <h3 className={`font-display uppercase text-3xl lg:text-4xl tracking-normal leading-[0.8] ${text_color} ${className ? className : ""} mb-3`}>{children}</h3>
        case 'h4':
            return <h4 className={`font-display uppercase text-2xl lg:text-3xl tracking-normal leading-[0.8] ${text_color} ${className ? className : ""} mb-3`}>{children}</h4>
        case 'h5':
            return <h5 className={`font-display uppercase text-1xl lg:text-2xl tracking-normal leading-[0.8] ${text_color} ${className ? className : ""} mb-3`}>{children}</h5>
        case 'h6':
            return <h6 className={`font-display uppercase text-lg lg:text-1xl tracking-normal leading-[0.8] ${text_color} ${className ? className : ""} mb-3`}>{children}</h6>
        default:
            return null

    }

}

export default Heading