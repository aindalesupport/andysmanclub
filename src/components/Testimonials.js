import React, { useState, useRef } from 'react'
import SbEditable from "storyblok-react"
import Slider from "react-slick";
import Label from 'src/components/Label'
import Heading from 'src/components/Heading'
import Button from 'src/components/Button'
import GetAny from 'src/utils/GetAny'
import InView from "src/utils/InView";
import useBackground from '../utils/useBackground';

const Testimonial = (props) => {
    return (
        <div className="text-center max-w-6xl mx-auto">
            <Heading size="h2" className={`lg:!text-6xl md:!text-5xl !text-4xl lg:!leading-[0.85] md:!leading-[0.85] !leading-[0.85] !mb-0 ${props.blackBackground ? 'text-white' : 'text-black'}`}>
                “{props.content.content}”
            </Heading>
            <h5 className="mt-8 font-body text-base text-black">{props.content.person}</h5>
        </div>
    )
}

const Testimonials = ({blok}) => {

    const ref = useRef();
    const isVisible = InView(ref, false);
  
    const animationFadeUp = `duration-1000 opacity-0 translate-y-8 delay-500 ${
      isVisible && "!opacity-100 !translate-y-0"
    }`;
  
    useBackground({ isVisible, color: blok.background_color });

    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef();

    const settings = {
        dots: !blok.button_functionality,
        fade: true,
        arrows: false,
        speed: 500,
        autoplay: !blok.button_functionality,
        autoplaySpeed: 8000,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: `slick-dots !block !top-full !pt-16`,
        beforeChange: (current, next) => setCurrentIndex(next),
        appendDots: dots => (
            <div>
                <ul className="">
                    {dots.map((item, i) => (
                        <li className={`!m-[3px] !h-[10px] !w-[10px] duration-300`} key={i}>
                            {item.props.children}
                        </li>
                    ))}
                </ul>
            </div>
          ),
        customPaging: i => (
            <div
                className={`relative w-full h-full transition-colors rounded-full duration-300
                ${i === currentIndex ? "bg-yellow" : "bg-[#E0E0E0]"}`}
            ></div>
        )
    };

    return (
        <SbEditable content={blok} key={blok._uid}>
            <div className={`${blok.background_color === "bg-black" ? 'py-36 lg:py-64' : 'my-36 lg:my-64'} `}>
                <div className={`max-w-7xl mx-auto px-6 text-center ${!blok.button_functionality ? 'pb-20' : ''} ${animationFadeUp}`} ref={ref}>
                    <Label className="">{blok.label}</Label>
                    <Slider {...settings} ref={sliderRef} className="mt-12">
                        {GetAny(blok.items).map(item => <Testimonial {...item} blackBackground={blok.background_color === "bg-black"} key={item.uuid}/>)}
                    </Slider>
                    {blok.button_functionality &&
                        <Button className="mt-12" onBlackBackground={blok.background_color === "bg-black"} onClick={() => sliderRef.current.slickNext()}>{blok.button_text}</Button>
                    }
                </div>
            </div>
      </SbEditable>
    )
  };

export default Testimonials;