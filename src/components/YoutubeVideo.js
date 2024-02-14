import React, { useRef, useState } from 'react';
import SbEditable from 'storyblok-react';
import FluidImage from 'src/utils/FluidImage';
import PlayButton from "src/images/play_button.svg";
import Heading from 'src/components/Heading';
import InView from "src/utils/InView";
import useBackground from "src/utils/useBackground";

const Video = ({ blok }) => {
    const ref = useRef();
    const isVisible = InView(ref, true);

    const animationFadeUp = `duration-1000 opacity-0 translate-y-8 delay-500 ${
        isVisible ? "!opacity-100 !translate-y-0" : ""
    }`;

    useBackground({ isVisible, color: blok.background_color });

    return (
        <SbEditable content={blok} key={blok._uid}>
            <div className="lg:py-48 py-24" ref={ref}>
                <div className="relative max-w-6xl mx-auto px-6">
                    <Heading size="h4" className="text-white md:!mb-10 !mb-6 boldGreyItalic mx-auto lg:!text-7xl md:!text-6xl !text-5xl md:!leading-[0.8] !leading-[0.8] text-center !mt-0">{blok.title}</Heading>
                </div>
                <div className={`relative max-w-6xl mx-auto px-6 ${animationFadeUp}`} ref={ref}>
                    <div className="relative z-10 object-cover block aspect-w-16 aspect-h-9">
                            <div className="video-responsive">
                                <iframe class="w-full h-full"
                                    title="YouTube Video"
                                    src={`https://www.youtube.com/embed/${blok.youtube_id}?autoplay=1`}
                                    allowFullScreen
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                ></iframe>
                            </div>
                    </div>
                </div>
            </div>
        </SbEditable>
    );
};

export default Video;
