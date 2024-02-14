import React, { useState, useRef } from 'react'
import SbEditable from 'storyblok-react'
import Label from 'src/components/Label'
import Button from 'src/components/Button'
import Heading from 'src/components/Heading'
import FixedImage from 'src/utils/FixedImage'
import Slider from "react-slick";
import InView from "src/utils/InView";
import useBackground from "src/utils/useBackground";

const Image = (props) => {
    const ref = useRef();
    const isVisible = InView(ref, true);
  
    const animationInRight = `duration-1000 opacity-0 translate-x-8 delay-500 ${
      isVisible && "!opacity-100 !translate-x-0"
    }`;
  
    return (
        <div className={`text-white md:p-[7.5px] p-[3px] group ${animationInRight}`} ref={ref}>
            <div className="relative block h-full w-full">
                <FixedImage image={props} className="mb-4 group-hover:grayscale-0 grayscale duration-300 w-full"/>
            </div>
        </div>
    )
}

const PrevArrow = props => {
    const { onClick } = props
    return (
        <div
            className={`group lg:bg-black bg-white hover:bg-white border border-white text-white h-11 w-11 duration-300 flex items-center justify-center rounded-full absolute right-20 top-[110%] z-10
            ${props.currentSlide === 0 ? 'opacity-50 pointer-events-none' : ' opacity-100'}
            `}
            onClick={onClick}
            onKeyDown={onClick}
            role="button"
            tabIndex={0}
        >
            <i className="fa-solid fa-chevron-left lg:text-white text-black group-hover:text-black duration-300 text-lg"></i>
        </div>
    );
};

const NextArrow = props => {
    const { onClick } = props
    // The conditional below is for when the last slide is reached.
    // Because we have 3.5, 2.5, 1.5 in the slidesToShow we can use this to detect the last one.
    // The last one should not be dividable by 1
    return (
        <div
            className={`group lg:bg-black bg-white hover:bg-white border border-white h-11 w-11 duration-300 flex items-center justify-center rounded-full absolute right-6 top-[110%] z-10
            ${props.currentSlide % 1 !== 0 ? 'opacity-50 pointer-events-none' : ' opacity-100'}
            `}
            onClick={onClick}
            onKeyDown={onClick}
            role="button"
            tabIndex={0}
        >
            <i className="fa-solid fa-chevron-right lg:text-white text-black group-hover:text-black duration-300 text-lg"></i>
        </div>
    );
};

const ImageSlider = ({ blok }) => {
    const ref = useRef();
    const isVisible = InView(ref, true);
  
    const animationFadeUp = `duration-1000 opacity-0 translate-y-8 delay-500 ${
      isVisible && "!opacity-100 !translate-y-0"
    }`;

    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        arrows: true,
        speed: 500,
        autoplay: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        beforeChange: (current, next) => setCurrentSlide(next),
        nextArrow: <NextArrow {...currentSlide}/>,
        prevArrow: <PrevArrow  {...currentSlide}/>,
    };

    useBackground({ isVisible, color: blok.background_color });

    return (
        <SbEditable content={blok} key={blok._uid}>
            <div className={`overflow-hidden pb-20 ${blok.background_color === "bg-black" ? "text-white" : "text-black"}`} ref={ref}>
                <div className={`max-w-8xl mx-auto lg:py-32 py-24 ${animationFadeUp}`}>
                    <div className="flex md:flex-row flex-col md:items-end items-start justify-between gap-5 px-6">
                        <div>
                            <Label className={`mb-10`}>{blok.label}</Label>
                            <Heading size="h2" className={`mb-0 lg:!text-[110px] !text-6xl !leading-[0.8] text-white`}>{blok.title}</Heading>
                        </div>
                        <Button onBlackBackground to={blok.button_target.cached_url}>{blok.button_text}</Button>
                    </div>
                    <Slider {...settings} className="mt-12 pl-3 groups-slider">
                        {blok.images.map(image => <Image {...image} key={image.id}/>)}
                    </Slider>
                </div>
            </div>        
        </SbEditable>
    )
}

export default ImageSlider