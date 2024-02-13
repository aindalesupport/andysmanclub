import React, { useRef } from 'react'
import SbEditable from 'storyblok-react'
import LogoHand from 'src/images/footer-logo-hand.svg'
import LogoText from 'src/images/badge-logo-text.svg'
import useBackground from '../utils/useBackground'
import InView from "src/utils/InView";

const Badge = ({ blok }) => {
    const ref = useRef();
    const isVisible = InView(ref, false);
    const position = blok.position === 'right' ? 'justify-end' :
    blok.position === 'left' ? 'justify-start' :
    'justify-center'

    useBackground({ isVisible, color: blok.background_color })

    return (
        <SbEditable content={blok} key={blok._uid}>
            <div ref={ref}>
                <div className={`max-w-5xl mx-auto px-6 lg:py-24 md:py-20 py-16 flex items-center overflow-hidden ${position}`}>
                    <div className="flex flex-col justify-center items-center relative">
                        <LogoHand className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
                        <LogoText className="animate-reverse-spin"/>
                    </div>
                </div>
            </div>        
        </SbEditable>
    )
}

export default Badge