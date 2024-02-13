import React, { useContext } from "react";
import { Link } from "gatsby";
import resolveLink from "src/utils/resolveLink";
import { PageContext } from "src/utils/context";

const Button = ({ children, className, to, style, target, onClick, activeClassName, onBlackBackground }) => {

    const { background_color } = useContext(PageContext)

    const text_color = background_color === "bg-black" ? "text-white border-yellow hover:text-black" : "text-black border-yellow hover:text-black";  

    const classes = `relative cursor-pointer overflow-hidden inline-flex justify-center items-center px-[30px] py-[20px] font-display !tracking-[0.01em] !leading-[1.5rem] font-extrabold lg:bg-transparent bg-yellow border z-[1] uppercase transition duration-300 lg:text-2xl text-1.5xl
  before:bg-yellow before:content-[''] before:duration-300 before:z-[-1] before:absolute before:w-full before:h-full before:right-full hover:before:right-0 ${text_color}
  ${ className ? className : ""}`

  return (
    // If there is no text don't display the button at all
    !children ? ''
    // If there is no target/link just output a div. This is to prevent the nested <a> problem
    : !to ?
        <div 
        className={`${classes}`}
        activeClassName={activeClassName ? activeClassName : ""}
        style={style}
        role="button"
        tabIndex="0"
        onClick={onClick ? onClick : ""}
        onKeyPress={onClick ? onClick : ""}
        >
            {children}
        </div>
    // If the target is a non-gatsby target
    : to.includes('tel:') || to.includes('mailto:') || target === '_blank' ? 
        <a 
        className={`${classes}`} 
        href={to.startsWith('www.') ? `https://${to}` : to}
        target={target}
        style={style}
        role="button"
        tabIndex="0"
        onClick={onClick ? onClick : ""}
        onKeyPress={onClick ? onClick : ""}
        >
            {children}
        </a>
    // Default
    :
        <Link
        className={`${classes}`}
        to={resolveLink(to)}
        activeClassName={activeClassName ? activeClassName : ""}
        style={style}
        role="button"
        tabIndex="0"
        onClick={onClick ? onClick : ""}
        onKeyPress={onClick ? onClick : ""}
        >
            {children}
        </Link>
);
};

export default Button;
