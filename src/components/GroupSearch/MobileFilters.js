import React, { useState, useEffect } from "react"
import { XIcon } from '@heroicons/react/outline'
import ClearFilters from "./ClearFilters"

const MobileFilters = ({ children }) => {

  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false);

  // Change the style of the navbar on scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Set the body to overflow hidden when mobile filter is open
  useEffect(() =>{
    if( open ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible"
    }
    window.addEventListener("scroll", handleScroll);
  }, [open, scrolled])

  return (
        <>
          {/* Filter Button */}
          <div 
            className={'block lg:hidden'}
            onClick={() => setOpen(true)}
            onKeyPress={() => setOpen(true)}
            role="button"
            tabIndex="0"
          >
            <div className="h-px w-11/12 mx-auto bg-[#BDBDBD]"></div>
            <div className="font-body uppercase text-[11px] bg-white text-black leading-loose tracking-[0.06em] text-center w-full py-5 font-semibold">Filters +</div>
          </div>
        {/* Filter Popup */}
        <div className={`${open ? 'visible' : 'invisible'}`}>
            <div className={`fixed z-50 inset-0 overflow-y-auto ${scrolled ? 'top-0' : 'top-0'} ${open ? 'opacity-100' : 'opacity-0'} duration-300 ease-in-out transition`}>
                <div className={`flex items-end justify-center text-center sm:block sm:p-0 ${scrolled ? 'h-[calc(100vh-0px)]' : 'h-[calc(100vh-0px)]'}`}>
                    <div className="flex flex-col justify-between min-h-full w-full align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all">
                      <div className="overflow-y-scroll max-h-[calc(100vh-92px)]">
                        <div className="bg-white py-4 pt-12 shadow px-6 flex flex-row justify-between items-center">
                            <button className="font-body tracking-[0.06em] uppercase text-[11px] font-semibold flex flex-row items-center w-full focus:outline-none" onClick={() => setOpen(false)}>
                                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 8.5L2 5.12963L6 1.5" stroke="black" stroke-width="1.5" stroke-linecap="square"/>
                                </svg>
                                <span className="ml-3">Filters</span>
                            </button>
                            <button
                                type="button"
                                className="bg-white rounded text-black focus:outline-none"
                                onClick={() => setOpen(false)}
                            >
                                <span className="sr-only">Close</span>
                                <XIcon className="h-7 w-7" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="w-full px-6 pt-6">
                            <div className="flex flex-col gap-1">
                              {children}
                            </div>
                        </div>
                      </div>
                      <div className="px-6 py-6 flex flex-row gap-2">
                        <ClearFilters className="w-1/2"/>
                        <button
                            type="button"
                            className="block font-body px-6 py-3 text-sm text-white bg-black font-semibold w-1/2"
                            onClick={() => setOpen(false)}
                        >
                            See results
                        </button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MobileFilters