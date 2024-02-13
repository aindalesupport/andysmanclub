import React, { useRef } from 'react'
import SbEditable from 'storyblok-react'
import Label from 'src/components/Label'
import Heading from 'src/components/Heading'
import FluidImage from 'src/utils/FluidImage'
import RichText from 'src/utils/RichText'
import GetTeam from 'src/utils/GetTeam'
import GetTrustees from 'src/utils/GetTrustees'
import useBackground from '../utils/useBackground'
import InView from "src/utils/InView";

const Team = ({ blok }) => {
    const ref = useRef();
    const isVisible = InView(ref, false);
    useBackground({ isVisible, color: blok.background_color });
  
    const animationFadeUp = `duration-1000 opacity-0 translate-y-8 delay-500 ${
      isVisible && "!opacity-100 !translate-y-0"
    }`;

    const contentToGrab = blok.grab_trustees ? GetTrustees() : GetTeam()
    return (
        <SbEditable content={blok} key={blok._uid}>
            <div className={blok.background_color === "bg-black" ? 'text-white' : 'text-black'} ref={ref}>
                <div className={`max-w-8xl mx-auto px-6 lg:py-52 py-32 ${animationFadeUp}`}>
                    <Label className={`mb-10`}>{blok.label}</Label>
                    <Heading size="h2" className={`mb-0 lg:!text-[110px] !text-6xl !leading-[0.8] ${blok.background_color === "bg-black" ? 'text-white' : 'text-black'}`}>{blok.title}</Heading>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 lg:gap-y-20 gap-y-10 lg:mt-20 mt-16">
                        {contentToGrab.map((item) => (
                            <div className="flex xl:flex-row flex-col gap-8 justify-start items-start" key={item.uuid}>
                                <div className="xl:w-4/12 w-6/12">
                                    <FluidImage image={item.content.image}/>
                                </div>
                                <div className="xl:w-8/12 w-full">
                                    <Heading size="h3" className={`mb-0.5 ${blok.background_color === "bg-black" ? 'text-white' : 'text-black'}`}>{item.name}</Heading>
                                    <Label className={`mb-6`}>{item.content.position}</Label>
                                    <div className="prose lg:text-base text-sm text-white tracking-[-0.05px]">
                                        <RichText>{item.content.description}</RichText>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>        
        </SbEditable>
    )
}

export default Team