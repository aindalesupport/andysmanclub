import React, { useEffect, useState } from "react"
import Link from 'gatsby-link'
import SbEditable from 'storyblok-react'
import LogoTextOnly from "src/images/logo_textonly.svg"
import LogoShort from "src/images/logo_short.svg"
import resolveLink from 'src/utils/resolveLink'
import RichText from 'src/utils/RichText'

const Header = ({ settings }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  // Change the style of the navbar on scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true)
      setAnimate(true)
    } else {
      setScrolled(false)
      setAnimate(false)
    }
  };

  useEffect(() => {
    // Initial onload animation
    setTimeout(() => {
      if (!scrolled) {
        setAnimate(false)
      }
    }, 500)
    window.addEventListener("scroll", handleScroll);
    // Body overflow control
    open ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible"
    // Gets screen size - to fix mobile viewport height problem
    if (typeof window !== "undefined") {
      function handleResize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [scrolled, open]);

  return (
    <SbEditable content={settings} key={settings._uid}>
      <div className={`sticky top-0 w-full z-50 bg-black`}>
        <div className="bg-yellow w-full py-2.5">
          <div className="max-w-screen-2xl mx-auto px-6 text-center font-body font-semibold text-black text-[11px] tracking-[0.06em] leading-none">
            <RichText use_bg={false} text_color="text-black">
              {settings.header_message}
            </RichText>
          </div>
        </div>
        <div className="max-w-screen mx-auto px-6">
          <div className={`flex justify-between items-center space-x-10 transition-all duration-300 w-full py-3.5`}>
              <div className="flex justify-start items-center">
                <Link to="/" className="flex flex-row justify-center items-center h-[55px]">
                  <LogoShort className=""/>
                  <LogoTextOnly className={`ml-3 ${animate ? 'animate' : ''}`}/>
                </Link>
              </div>
              <div className="flex flex-row justify-center items-center">
                {/* Outer links */}
                <div className="md:block hidden">
                  {settings.header_outer_navigation.map((item) => (
                    <SbEditable content={item} key={item._uid}>
                      <Link
                      to={resolveLink(item.target.cached_url)}
                      className="lg:text-base text-sm font-body tracking-[-0.5px] leading-none text-white duration-300 p-3 hover:text-yellow">
                      {item.name}
                      </Link>
                    </SbEditable>
                  ))}
                </div>
                {/* The button */}
                <div className="-mr-2 -my-2 z-[999999] focus:outline-none outline-none" role="button" tabIndex="0" onClick={() => handleClick()} onKeyDown={() => handleClick()}>
                  <div className={`p-3 relative inline-flex items-center justify-center focus:outline-none outline-none text-white font-body hover:text-yellow group`}>
                    <span className={`absolute duration-300 ${open ? '!opacity-100 !-translate-x-full' : 'opacity-0 translate-x-0'}`}>Close</span>
                    <div className="p-2 pr-0 pl-0 flex items-center justify-center outline-none focus:outline-none" role="button" tabIndex="0">
                      <button className={`w-[25px] h-[16px] relative focus:outline-none outline-none`}>
                        <div
                          className={`
                          bg-white group-hover:bg-yellow h-0.5 absolute left-0 transform-gpu translate-z-0 duration-300 -translate-y-1/2
                            ${ open ? "top-1/2 rotate-[135deg] w-full group-hover:bg-yellow" : "top-0 rotate-0 w-full"}
                          `}
                        ></div>
                        <div
                          className={`
                          bg-white group-hover:bg-yellow h-0.5 w-full absolute left-2 transform-gpu translate-z-0 duration-300 -translate-y-1/2
                            ${open ? "opacity-0" : "top-1/2 rotate-0"}
                          `}
                        ></div>
                        <div
                          className={`
                            bg-white group-hover:bg-yellow h-0.5 absolute left-0 transform-gpu translate-z-0 duration-300 translate-y-1/2
                            ${open ? "bottom-1/2 rotate-[-135deg] w-full group-hover:bg-yellow" : "bottom-0 rotate-0 w-full"}
                            `}
                        ></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        {/* The overlay menu */}
        <div class={`${open ? 'visible' : 'invisible'}`}>
          <div static className={`absolute inset-0 z-[99999] h-screen overflow-hidden duration-300 ease-in-out ${open ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-black h-screen">
              <div className={`flex flex-col items-center justify-center h-full`}>
                <div className="w-full overflow-x-hidden">
                  <nav className="grid max-w-7xl mx-auto px-6 overflow-y-scroll py-6 no-scrollbar">
                    {settings.header_navigation.map((item, index) => (
                      <SbEditable content={item} key={item._uid}>
                        <Link
                          to={item.target.cached_url === "home" ? "/" : resolveLink(item.target.cached_url)}
                          className={`group tall:text-8xl text-5xl font-display font-extrabold uppercase tracking-[0] !leading-[0.78] transition py-1 ease-in-out ${open ? 'opacity-100 translate-y-0 duration-500' : 'opacity-0 translate-y-2'}`}
                          style={open ? {transitionDelay: `${index * 0.2}s`} : null}
                        >
                        <span className="text-white group-hover:text-yellow duration-300">{item.name}</span>
                        </Link>
                      </SbEditable>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SbEditable>
  )
}

export default Header;
