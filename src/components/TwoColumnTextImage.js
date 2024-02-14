import React, { useRef } from "react";
import SbEditable from 'storyblok-react'
import Label from 'src/components/Label'
import Button from 'src/components/Button'
import Heading from 'src/components/Heading'
import RichText from 'src/utils/RichText'
import FluidImage from 'src/utils/FluidImage'
import InView from "src/utils/InView";
import useBackground from "../utils/useBackground";

const TwoColumnTextImage = ({ blok }) => {
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
            <div ref={ref}>
                <div className={`max-w-8xl mx-auto px-6 ${blok.background_color === "bg-black" ? 'lg:py-32 py-24' : 'lg:my-32 my-24'}`}>
                    <Label className={`lg:mb-16 mb-10 ${animationFadeUp}`}>{blok.label}</Label>
                    <div className="flex lg:flex-row flex-col items-start justify-center lg:gap-24 gap-6">
                        <div className={`lg:w-[58%] w-full ${animationFadeUp}`}>
                            <Heading size="h2" className={`mb-0 max-w-[674px] lg:!text-[110px] !text-6xl !leading-[0.8] ${blok.background_color === "bg-black" ? 'text-white' : 'text-black'}`}>
                                <RichText>{blok.title}</RichText>
                            </Heading>
                            <FluidImage image={blok.image} className="max-w-[370px] lg:ml-auto lg:mt-24 mt-6"/>
                        </div>
                        <div className={`lg:w-[42%] w-full ${animationInRight}`}>
                            <div className={`prose hover:prose-a:underline ${blok.background_color === "bg-black" ? 'text-white' : 'text-black'}`}>
                                <RichText>{blok.content}</RichText>
                            </div>
                            <Button className="mt-8" onBlackBackground={blok.background_color === "bg-black"} to={blok.button_target.cached_url}>{blok.button_text}</Button>
                        </div>
                    </div>
                </div>
            </div>        
        </SbEditable>
    )
}

export default TwoColumnTextImage