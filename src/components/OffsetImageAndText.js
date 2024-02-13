import React, { useRef } from "react";
import SbEditable from 'storyblok-react'
import Heading from 'src/components/Heading'
import RichText from 'src/utils/RichText'
import FluidImage from 'src/utils/FluidImage'
import InView from "src/utils/InView";
import useBackground from "../utils/useBackground";

const OffsetImageAndText = ({ blok }) => {
    const ref = useRef();
    const isVisible = InView(ref, false);
  
    const animationFadeUp = `duration-1000 opacity-0 translate-y-8 delay-500 ${
      isVisible && "!opacity-100 !translate-y-0"
    }`;
  
    const animationInRight = `duration-1000 opacity-0 translate-x-8 delay-500 ${
      isVisible && "!opacity-100 !translate-x-0"
    }`;
    
    useBackground({ isVisible, color: blok.background_color });

    return (
        <SbEditable content={blok} key={blok._uid}>
            <div>
                <div className="max-w-8xl mx-auto px-6 lg:py-32 py-24">
                    <div className="flex md:flex-row flex-col items-start justify-center xl:gap-44 lg:gap-24 gap-12">
                        <div className={`md:w-1/2 w-full md:order-first order-last md:mt-[21%] ${animationFadeUp}`} ref={ref}>
                            <FluidImage image={blok.image}/>
                        </div>
                        <div className={`md:w-1/2 w-full ${animationInRight}`} ref={ref}>
                            <Heading size="h2" className={`xl:!text-[90px] lg:!text-[68px] md:!text-[52px] !text-6xl !leading-[0.8] text-white boldYellowItalic mb-0`}>
                                <RichText bold_classes="text-yellow">{blok.content}</RichText>
                            </Heading>
                        </div>
                    </div>
                </div>
            </div>        
        </SbEditable>
    )
}

export default OffsetImageAndText