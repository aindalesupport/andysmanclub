import React, { useRef } from "react";
import SbEditable from 'storyblok-react'
import Label from 'src/components/Label'
import Button from 'src/components/Button'
import Heading from 'src/components/Heading'
import RichText from 'src/utils/RichText'
import InView from "src/utils/InView";
import useBackground from "../utils/useBackground";

const TwoColumnText = ({ blok }) => {

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
                <div className={`max-w-8xl mx-auto px-6 ${blok.background_color === "bg-white" ? 'lg:my-32 my-24' : 'lg:py-32 py-24'}`}>
                    <Label className={`lg:mb-16 mb-10 ${animationFadeUp}`} ref={ref}>{blok.label}</Label>
                    <div className="flex lg:flex-row flex-col items-start justify-center lg:gap-24 gap-6">
                        <div className={`lg:w-[58%] w-full ${animationFadeUp}`} ref={ref}>
                            <Heading size="h2" className={`mb-0 max-w-[674px] lg:!text-[110px] !text-6xl !leading-[0.8]`}>
                                <RichText>{blok.title}</RichText>
                            </Heading>
                        </div>
                        <div className={`lg:w-[42%] w-full ${animationInRight}`} ref={ref}>
                            <div className={`prose hover:prose-a:underline ${blok.white_background ? 'text-black' : 'text-white'}`}>
                                <RichText>{blok.content}</RichText>
                            </div>
                            <Button className="mt-8" onBlackBackground={!blok.white_background} to={blok.button_target.cached_url}>{blok.button_text}</Button>
                        </div>
                    </div>
                </div>
            </div>        
        </SbEditable>
    )
}

export default TwoColumnText