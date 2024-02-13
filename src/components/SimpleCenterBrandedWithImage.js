import React, { useRef } from "react";
import SbEditable from 'storyblok-react'
import Label from 'src/components/Label'
import Button from 'src/components/Button'
import Heading from 'src/components/Heading'
import RichText from 'src/utils/RichText'
import FluidImage from 'src/utils/FluidImage'
import InView from "src/utils/InView";
import useBackground from "../utils/useBackground";

const SimpleCenterBrandedWithImage = ({ blok }) => {

    const ref = useRef();
    const isVisible = InView(ref, false);
  
    const animationFadeUp = `duration-1000 opacity-0 translate-y-8 delay-500 ${
      isVisible && "!opacity-100 !translate-y-0"
    }`;

    useBackground({ isVisible, color: blok.background_color });

    return (
        <SbEditable content={blok} key={blok._uid}>
            <div>
                <div className={`max-w-8xl mx-auto px-6 lg:my-48 my-28 text-center ${animationFadeUp}`} ref={ref}>
                    <FluidImage image={blok.image} className="max-w-[750px] mx-auto lg:mb-28 mb-16"/>
                    <Label className={``}>{blok.label}</Label>
                    <Heading size="h2" className={`md:!my-10 !my-6 max-w-[730px] boldGreyItalic mx-auto lg:!text-[110px] md:!text-7xl !text-6xl md:!leading-[0.8] !leading-[0.8] text-black`}>
                        <RichText bold_classes="text-darkgrey">{blok.title}</RichText>
                    </Heading>
                    <div className={`prose hover:prose-a:underline text-black max-w-[730px] mx-auto tracking-[-0.5px]`}>
                        <RichText>{blok.content}</RichText>
                    </div>
                    <Button className="mt-8" to={blok.button_target.cached_url}>{blok.button_text}</Button>
                </div>
            </div>        
        </SbEditable>
    )
}

export default SimpleCenterBrandedWithImage