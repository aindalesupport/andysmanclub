import React, { useRef } from 'react'
import SbEditable from 'storyblok-react'
import Button from 'src/components/Button'
import Heading from 'src/components/Heading'
import RichText from 'src/utils/RichText'
import useBackground from '../utils/useBackground'
import InView from "src/utils/InView";

const SimpleCenteredBranded = ({ blok }) => {
    const ref = useRef();
    const isVisible = InView(ref, false);
    useBackground({ isVisible, color: blok.background_color });
    return (
        <SbEditable content={blok} key={blok._uid}>
            <div className={`${blok.background_color === "bg-black" ? 'lg:py-52 py-32' : 'lg:my-52 my-32'}`} ref={ref}>
                <div className="max-w-8xl mx-auto px-6  text-center"> 
                    <Heading size="h2" className={`!md:mb-6 !mb-8 max-w-[730px] boldGreyItalic mx-auto lg:!text-[90px] md:!text-7xl !text-6xl md:!leading-[0.8] !leading-[0.8] ${blok.black_background ? 'text-white' : 'text-black'}`}>
                        <RichText>{blok.title}</RichText>
                    </Heading>
                    <div className={`prose hover:prose-a:underline max-w-[730px] mx-auto ${blok.background_color === "bg-black" ? 'text-white' : 'text-black'}`}>
                        <RichText>{blok.content}</RichText>
                    </div>
                    <Button className="md:mt-16 mt-12" to={blok.button_target.cached_url} onBlackBackground={blok.background_color === "bg-black"}>{blok.button_text}</Button>
                </div>
            </div>        
        </SbEditable>
    )
}

export default SimpleCenteredBranded