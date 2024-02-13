import React from 'react'

const Label = ({children, className}) => {
    return children ? (
        <h5 className={`font-body text-darkgrey lg:text-sm text-xs !leading-[1] tracking-[0.06em] uppercase ${className ? className : ""}`}>{children}</h5>
    )
    : ''
}

export default Label