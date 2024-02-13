import React, { useContext } from "react";
import FormatDate from "src/utils/FormatDate";
import Label from "src/components/Label";
import FluidImage from "src/utils/FluidImage";
import Heading from "src/components/Heading";
import { PageContext } from "src/utils/context";
import { Link } from "gatsby";

const ContentHeading = () => {
  const context = useContext(PageContext);

  return (
    <div className="bg-black text-white">
      <div className={`max-w-8xl mx-auto px-6 py-12 lg:py-24`}>
        {context.content?.component === "news_views" && (
          <Link
            to={"/news-and-views/"}
            className="font-body hover:text-yellow relative mb-10 block py-2 pr-2 text-[11px] uppercase tracking-wide text-white duration-300 md:-mb-6"
          >
            <i className="fa-regular fa-chevron-left mr-2 w-2 text-[9px]"></i>
            News &amp; Views
          </Link>
        )}
        <div className="flex flex-col gap-6 md:flex-row lg:gap-12">
          <div className="w-full md:order-last md:mb-24 md:w-6/12 lg:mb-32">
            <FluidImage
              className="w-full"
              image={context.content?.featured_image}
            />
          </div>
          <div className="flex w-full flex-col items-start justify-end md:order-first md:w-6/12">
            <div>
              <Label className="mb-4 !text-[13px]">
                {context.tag_list?.join(", ")}
              </Label>
              <Heading
                size="h1"
                className="max-w-xl !text-5xl !leading-[0.8] text-white md:!text-6xl md:!leading-[0.8] lg:!text-8xl lg:!leading-[0.8]"
              >
                {context.name}
              </Heading>
              <Label className="mt-10 !text-[13px] lg:mt-6">
                {FormatDate(context.first_published_at)}
              </Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHeading;
