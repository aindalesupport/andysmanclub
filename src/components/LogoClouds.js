import React, { useRef } from "react";
import SbEditable from 'storyblok-react'
import Label from 'src/components/Label'
import Heading from 'src/components/Heading'
import RichText from 'src/utils/RichText'
import FluidImage from 'src/utils/FluidImage'
import InView from "src/utils/InView";
import useBackground from "src/utils/useBackground";

const LogoClouds = ({ blok }) => {
    const ref = useRef();
    const isVisible = InView(ref, true);
    useBackground({ isVisible, color: blok.background_color });

    const animationFadeUp = `duration-1000 opacity-0 translate-y-8 delay-500 ${
        isVisible && "!opacity-100 !translate-y-0"
    }`;

    const animationInRight = `duration-1000 opacity-0 translate-x-8 delay-500 ${
        isVisible && "!opacity-100 !translate-x-0"
    }`;
    
    return (
        <SbEditable content={blok} key={blok._uid}>
            <div className="bg-white">
                <div className={`max-w-8xl mx-auto px-6 lg:my-64 my-40 ${animationFadeUp}`} ref={ref}>
                    <Label>{blok.label}</Label>
                    <Heading size="h2" className={`md:!my-10 !my-6 max-w-[820px] boldGreyItalic lg:!text-[110px] md:!text-7xl !text-6xl md:!leading-[0.8] !leading-[0.8] ${blok.background_color === "bg-black" ? "text-white" : "text-black"}`}>
                        <RichText>{blok.title}</RichText>
                    </Heading>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-12 md:gap-8 gap-4 mt-20 items-end'>
                    {blok.items.map((item) => (
                        <div className={`col-span-1 ${animationInRight}`} ref={ref}>
                            <FluidImage className="h-auto mx-auto md:mx-0" image={item.image} />
                        </div>
                    ))}
                    </div>
                </div>
            </div>        
        </SbEditable>
    )
}

export default LogoClouds