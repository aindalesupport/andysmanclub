import React, { useRef } from 'react'
import SbEditable from 'storyblok-react'
import Button from 'src/components/Button'
import Heading from 'src/components/Heading'
import RichText from 'src/utils/RichText'
import InView from "src/utils/InView";
import useBackground from "src/utils/useBackground";

const Centered = ({ blok }) => {
    const ref = useRef();
    const isVisible = InView(ref, false);  

    useBackground({ isVisible, color: blok.background_color });

    return (
        <SbEditable content={blok} key={blok._uid}>
            <div className={`${blok.background_color === "bg-black" ? "text-white" : "text-black"}`}>
                <div className="max-w-8xl mx-auto px-6 lg:my-48 my-28" ref={ref}>
                    <div className="md:flex block flex-row">
                        {blok.title &&
                        <div className="md:w-1/3 w-full">
                            <Heading size="h2" className={`md:!mb-10 !mb-6 max-w-[730px] boldGreyItalic mx-auto lg:!text-[110px] md:!text-7xl !text-6xl md:!leading-[0.8] !leading-[0.8] text-black`}>
                                <RichText>{blok.title}</RichText>
                            </Heading>
                        </div>
                        }
                        <div className={`${blok.title ? 'md:w-2/3 w-full' : 'w-full mx-auto'}`}>
                            <div className={`prose max-w-[730px] mx-auto tracking-[-0.5px] text-darkgrey marker:text-darkgrey`}>
                                <RichText>{blok.content}</RichText>
                            </div>
                            <Button className="mt-8" to={blok.button_target}>{blok.button_text}</Button>
                        </div>
                    </div>
                </div>
            </div>        
        </SbEditable>
    )
}

export default Centered