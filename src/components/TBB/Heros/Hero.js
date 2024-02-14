import React, { useRef } from "react";
import SbEditable from "storyblok-react";
import FluidImage from "src/utils/FluidImage";
import Heading from "src/components/Heading";
import RichText from "src/utils/RichText";
import { CurlyQ } from "@rafaelrinaldi/curlyq";
import Button from "src/components/Button";
import InView from "src/utils/InView";
import useBackground from "src/utils/useBackground";

const Hero = ({ blok }) => {
  const ref = useRef();
  const isVisible = InView(ref, false);

  const animationFadeUp = `duration-1000 opacity-0 translate-y-8 delay-500 ${
    isVisible && "!opacity-100 !translate-y-0"
  }`;

  const animationInRight = `duration-1000 opacity-0 translate-x-8 delay-500 ${
    isVisible && "!opacity-100 !translate-x-0"
  }`;

  useBackground({ isVisible, color: blok.background_color });

  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className={`${blok.background_color === "bg-black" ? "text-white" : "text-black"}`} ref={ref}>
        <div className="max-w-8xl 3xl:bg-slate-500 custom mx-auto flex flex-col py-32 px-8 md:flex-row">
          <div className={`w-full md:w-1/2 lg:w-[85%] xl:w-3/5 ${animationFadeUp}`}>
            <CurlyQ>
              <Heading
                size="h1"
                className="text-[90px] md:text-[128px] leading-[0.8] lg:text-[245px] xl:text-[260px] lg:leading-[0.8] md:max-w-sm lg:max-w-none"
              >
                {blok.title}
              </Heading>
            </CurlyQ>
            <div className="mt-6 max-w-lg md:ml-auto lg:mr-[75px]">
              <div className="prose hover:prose-a:underline mb-6 text-base text-white">
                <RichText>{blok.description}</RichText>
              </div>
              {blok.button_target?.cached_url && (
                <Button
                  to={blok.button_target?.cached_url}
                  target={
                    blok.button_target?.linktype !== "story" ? "_blank" : ""
                  }
                  onBlackBackground
                  className="mb-8 md:mb-0"
                >
                  {blok.button_text}
                </Button>
              )}
            </div>
          </div>
          <div className="flex w-full md:w-2/5">
            <FluidImage
              className={`w-full sm:w-4/5 lg:w-full lg:max-w-lg md:ml-auto md:self-end ${animationInRight}`}
              image={blok.hero_image}
              key={blok._uid}
            />
          </div>
        </div>
      </div>
    </SbEditable>
  );
};

export default Hero;
