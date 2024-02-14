import React, { useRef } from "react";
import SbEditable from "storyblok-react";
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

  useBackground({ isVisible, color: blok.background_color });

  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className={blok.background_color === "bg-black" ? "text-white" : "text-black"} ref={ref}>
        <div className="max-w-8xl 3xl:bg-slate-500 custom mx-auto flex flex-col py-24 px-8 md:flex-row">
          <div className={`w-full lg:max-w-[840px] ${blok.smaller_width ? 'xl:max-w-[790px]' : 'xl:max-w-[920px]' } ${animationFadeUp}`}>
            <CurlyQ>
              <Heading
                size="h1"
                className={`text-[80px] md:text-[120px] leading-[0.8] lg:text-[200px] lg:leading-[0.8] md:max-w-sm ${blok.smaller_width ? 'lg:max-w-[680px]' : 'lg:max-w-none' } mb-6`}
              >
                {blok.title}
              </Heading>
            </CurlyQ>
            <div className="mt-6 max-w-lg md:ml-auto">
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
        </div>
      </div>
    </SbEditable>
  );
};

export default Hero;
