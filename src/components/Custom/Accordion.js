import React, { useState, useEffect, useRef } from "react";
import SbEditable from "storyblok-react";
import RichText from "src/utils/RichText";
import Heading from "src/components/Heading";
import InView from "src/utils/InView";
import useBackground from "src/utils/useBackground";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AccordionItem = ({props, active, setActive, isActive}) => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.scrollHeight + 24);
  }, []);

  return (
    <div
      className={`cursor-pointer outline-none`}
      onClick={() => setActive(active === props._uid ? false : props._uid)}
      onKeyPress={() => setActive(active === props._uid ? false : props._uid)}
      role="button"
      tabIndex="0"
    >
        <div className="w-full pt-5">
          <div className="relative flex w-full items-center">
            <Heading
            className="mb-0 pb-4 leading-[1.7rem] pr-6"
            size="h4"
            >
            {props.title}
            </Heading>
            <div className={`relative ml-auto pb-5`}>
                <span className={`absolute w-[15px] h-[3px] left-[-15px] inset-0 transition duration-700 ${isActive ? 'bg-yellow ' : 'bg-black ' }`}></span>
                <span className={`absolute w-[15px] h-[3px] left-[-15px] inset-0 transition duration-700 ${isActive ? ' rotate-0 bg-yellow ' : ' rotate-90 bg-black ' }`}></span>
            </div>
          </div>
          <div
            style={{ maxHeight: isActive ? height : 0 }}
            className={classNames(
              isActive ? "" : "",
              "overflow-hidden transform transition-all duration-1000 ease-in-out"
            )}
          >
            <div className="lg:text-base text-sm leading-5 text-black prose tracking-[-0.05px] pb-6" ref={ref}>
              <RichText>{props.content}</RichText>
            </div>
          </div>
        </div>
    </div>
  );
};

const Accordion = ({ blok }) => {
  const ref = useRef();
  const isVisible = InView(ref, false);

  const animationFadeUp = `duration-1000 opacity-0 translate-y-8 delay-500 ${
    isVisible && "!opacity-100 !translate-y-0"
  }`;

  const animationInRight = `duration-1000 opacity-0 translate-x-8 delay-500 ${
    isVisible && "!opacity-100 !translate-x-0"
  }`;

  const [active, setActive] = useState();

  useBackground({ isVisible, color: blok.background_color });

  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className={`bg-white text-black`} ref={ref}>
        <div className="max-w-8xl mx-auto px-6 lg:py-48 py-28">
          <div className="flex md:flex-row flex-colitems-center">
              <div class="md:w-3/4 w-full  ml-auto">
            <dl className="divide-y divide-[#E1E1E2] divide pt-3 ">
              {blok.items.map((faq) => (
                <AccordionItem
                  props={faq}
                  key={faq.title}
                  setActive={setActive}
                  active={active}
                  isActive={faq._uid === active}
                />
              ))}
            </dl>
            </div>
          </div>
        </div>
      </div>
    </SbEditable>
  );
};

export default Accordion;