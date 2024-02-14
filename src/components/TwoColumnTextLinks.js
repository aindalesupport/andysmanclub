import React, { useRef } from "react";
import SbEditable from 'storyblok-react'
import Label from 'src/components/Label'
import Heading from 'src/components/Heading'
import RichText from 'src/utils/RichText'
import resolveLink from 'src/utils/resolveLink'
import InView from "src/utils/InView";
import useBackground from "../utils/useBackground";


const TwoColumnTextLinks = ({ blok }) => {
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
            <div className={`${blok.white_background ? 'bg-white' : 'bg-black'}`}>
                <div className={`max-w-8xl mx-auto px-6 ${blok.background_color === "bg-white" ? 'lg:my-64 my-36' : 'lg:py-64 py-36'}`}>
                    <Label className={`lg:mb-16 mb-10 ${animationFadeUp}`} ref={ref}>{blok.label}</Label>
                    <div className={`flex lg:flex-row flex-col items-start justify-center lg:gap-12 gap-6`}>
                        <div className={`lg:w-[58%] w-full   ${animationFadeUp}`} ref={ref}>
                            <Heading size="h2" className={`mb-0 max-w-[674px] lg:!text-[110px] !text-6xl !leading-[0.8] ${blok.background_color === "bg-white" ? 'text-black' : 'text-white'}`}>
                                <RichText>{blok.title}</RichText>
                            </Heading>
                        </div>
                        <div className={`lg:w-[42%] w-full lg:-mt-2  ${animationInRight}`} ref={ref}>
                            {blok.links.map((link) => (
                                // eslint-disable-next-line
                                <a
                                    href={resolveLink(link.target.cached_url)} sssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                                    target={link.target.linktype !== 'story' ? '_blank' : ''} 
                                    rel={link.target.linktype !== 'story' ? 'noreferrer' : ''}
                                    className="py-1 block lg:text-darkgrey text-yellow text-lg tracking-[-0.05em] hover:text-yellow duration-300"
                                >
                                    {link.text}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>        
        </SbEditable>
    )
}

export default TwoColumnTextLinks