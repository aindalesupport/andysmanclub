import React, { useRef, useState } from 'react'
import SbEditable from 'storyblok-react'
import FluidImage from 'src/utils/FluidImage'
import PlayButton from "src/images/play_button.svg"
import Heading from 'src/components/Heading'
import InView from "src/utils/InView";
import useBackground from "src/utils/useBackground";

const Video = ({ blok }) => {

    const ref = useRef();
    const isVisible = InView(ref, true);
  
    const animationFadeUp = `duration-1000 opacity-0 translate-y-8 delay-500 ${
      isVisible && "!opacity-100 !translate-y-0"
    }`;

    const vidRef = useRef(false);
    const [hide, setHide] = useState(false);
    const handlePlayVideo = () => {
        vidRef.current.play()
        vidRef.current.controls = true;
        setHide(true)
    }
    
    useBackground({ isVisible, color: blok.background_color });

    return (
        <SbEditable content={blok} key={blok._uid}>
            <div className="lg:py-48 py-24" ref={ref}>
                <div className="relative max-w-6xl mx-auto px-6">
                    <Heading size="h4" className="text-white md:!mb-10 !mb-6 boldGreyItalic mx-auto lg:!text-7xl md:!text-6xl !text-5xl md:!leading-[0.8] !leading-[0.8] text-center !mt-0">{blok.title}</Heading>
                </div>    
                <div className={`relative max-w-6xl mx-auto px-6 ${animationFadeUp}`} ref={ref}>
                    <div className="relative z-10">
                        <video src={blok.cdn_video ? blok.cdn_video : blok.video.filename} type="video/mp4" preload="auto" width="1920" height="1080" muted controlsList="nodownload" ref={vidRef} className="z-10 block w-full h-full object-cover">
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                        <div onClick={handlePlayVideo} onKeyDown={handlePlayVideo} role="button" tabIndex="0" className={`group block absolute z-10 top-0 left-0 w-full h-full object-cover rounded cursor-pointer transition-all duration-500 ease-in-out focus:outline-none outline-none ${hide ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
                            <FluidImage className="z-10 block w-full h-full object-cover" image={blok.thumbnail} placeholder="https://via.placeholder.com/1280x720" />
                            <div className={`absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:h-24 h-16 sm:w-24 w-16 rounded-full inset-0`}>
                                <PlayButton className="w-full h-full transition duration-250 group-hover:scale-110"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SbEditable>
    )
}

export default Video