import React, { useState, useRef } from 'react'
import SbEditable from 'storyblok-react'
import Label from 'src/components/Label'
import Button from 'src/components/Button'
import Heading from 'src/components/Heading'
import FluidImage from 'src/utils/FluidImage'
import GetAny from 'src/utils/GetAny'
import Slider from "react-slick";
import InView from "src/utils/InView";
import useBackground from '../utils/useBackground'

const GroupItem = (props) => {
    const ref = useRef();
    const isVisible = InView(ref, false);
  
    const animationFadeUp = `duration-1000 opacity-0 translate-y-8 delay-500 ${
      isVisible && "!opacity-100 !translate-y-0"
    }`;
  
    const animationInRight = `duration-1000 opacity-0 translate-x-8 delay-500 ${
      isVisible && "!opacity-100 !translate-x-0"
    }`;

    return (
        <div className={`xl:p-4 p-3 group`}>
            <div className={`${animationInRight}`} ref={ref}>
                <div className="relative">
                    <FluidImage image={props.content.images[0]} className="mb-4 group-hover:grayscale-0 grayscale duration-300"/>
                    {props.content.coming_soon &&
                        <div className="bg-black lg:h-[74px] h-[52px] lg:w-[74px] w-[52px] rounded-full absolute lg:right-5 right-4 lg:top-5 top-4 flex justify-center items-center">
                            <span className="flex text-center lg:text-[20px] text-[16px] font-display leading-[0.8] mt-1">COMING SOON!</span>
                        </div>
                    }
                </div>
                <Label className={`mb-1 !text-[13px] text-[#5F5F5F]`}>{props.content.county}</Label>
                <Heading size="h3" className={`mb-0`}>{props.name}</Heading>
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

const Groups = ({ blok }) => {
    const ref = useRef();
    const isVisible = InView(ref, false);
  
    useBackground({ isVisible, color: blok.background_color });

    const animationFadeUp = `duration-1000 opacity-0 translate-y-8 delay-500 ${
      isVisible && "!opacity-100 !translate-y-0"
    }`;
  
    const animationInRight = `duration-1000 opacity-0 translate-x-8 delay-500 ${
      isVisible && "!opacity-100 !translate-x-0"
    }`;
    const [currentSlide, setCurrentSlide] = useState(0);

    useBackground({ isVisible, color: blok.background_color });

    const settings = {
        dots: false,
        arrows: true,
        speed: 500,
        autoplay: false,
        infinite: false,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        beforeChange: (current, next) => setCurrentSlide(next),
        nextArrow: <NextArrow {...currentSlide}/>,
        prevArrow: <PrevArrow  {...currentSlide}/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    return (
        <SbEditable content={blok} key={blok._uid}>
            <div className={`overflow-hidden pb-20 ${blok.background_color === "bg-black" ? "text-white" : "text-black"}`}>
                <div className={`max-w-8xl mx-auto lg:py-[270px] py-36 ${animationFadeUp}`} ref={ref}>
                    <div className="flex md:flex-row flex-col md:items-end items-start justify-between gap-5 px-6">
                        <div>
                            <Label className={`mb-10`}>{blok.label}</Label>
                            <Heading size="h2" className={`mb-0 lg:!text-[110px] !text-6xl !leading-[0.8]`}>{blok.title}</Heading>
                        </div>
                        <Button onBlackBackground to={blok.button_target.cached_url}>{blok.button_text}</Button>
                    </div>
                    <Slider {...settings} className="mt-12 pl-3 groups-slider">
                        {GetAny(blok.items).map(item => <GroupItem {...item} key={item.uuid}/>)}
                    </Slider>
                </div>
            </div>        
        </SbEditable>
    )
}

export default Groups