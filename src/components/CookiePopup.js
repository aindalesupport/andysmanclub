import React, { useState, useEffect } from "react";
import SetCookie from "../utils/SetCookie"
import CookieValue from "../utils/CookieValue"
import LogoHand from "src/images/footer-logo-hand.svg";
import Button from "../components/Button"

const CookiePopup = ({ blok }) => {
    const cookieValueCheck = CookieValue("10k_run_popup");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // See if cookie is present after 5sec and open the popup if it's not present
        setTimeout(() => {
            setOpen(!cookieValueCheck);
        }, "5000");
      }, [cookieValueCheck]);

    const handleClose = () => {
        // Set the cookie on close
        SetCookie(`10k_run_popup=true`);
        setOpen(false)
    }

    return !cookieValueCheck ? (
        <div className={`fixed top-0 left-0 w-full h-screen z-[9999] duration-500 ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}>
            <div className="absolute top-0 left-0 bg-black/30 w-full h-full" role="button" tabIndex={0} onClick={()=>handleClose()} onKeyDown={()=>handleClose()}>
                <span class="sr-only">Close</span>
            </div>
            <div className="relative max-w-8xl mx-auto sm:px-6 px-2 py-10 w-full h-full flex justify-center items-center z-10">
                <div className="absolute top-0 bg-black max-w-5xl w-full text-white lg:py-36 lg:px-36 md:py-24 md:px-24 py-12 sm:px-12 p-6 flex flex-col justify-center items-center text-center">
                    <button
                        className={`text-white font-body !absolute md:top-16 top-10 lg:right-16 md:right-10 right-6 cursor-pointer text-base py-2 flex flex-row justify-center items-center !leading-none z-50 hover:text-yellow duration-300`}
                        onClick={()=>handleClose()}
                        onKeyDown={()=>handleClose()}
                    >
                        <span>Close</span>
                        <div className="relative w-[24px] h-[24px] !leading-none ml-1">
                            <div className="w-[24px] h-[2px] bg-current absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-45"></div>
                            <div className="w-[2px] h-[24px] bg-current absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-45"></div>
                        </div>
                    </button>
                    <LogoHand className="mb-10"/>
                    <h2 className="uppercase font-display lg:text-[9.375rem] md:text-8xl sm:text-6xl text-5xl !leading-[0.8]">ANDYSMANCLUB 10K RUN</h2>
                    <div className="max-w-lg mx-auto mb-10">
                        <h4 className="uppercase font-display md:text-4xl text-3xl text-yellow mt-9">ANDYSMANCLUB 10K RUN</h4>
                        <p className="font-body lg:text-lg md:text-base text-sm tracking-[-0.5px]">All ages and abilities welcome. All proceeds to ANDYSMANCLUB.</p>
                    </div>
                    <Button onBlackBackground className="lg:!text-white !text-black hover:!text-black" to={'https://www.atwevents.co.uk/e/andysmanclub-10k-9616/'}>Sign up here</Button>
                </div>
            </div>
        </div>
    ) : ''
}

export default CookiePopup