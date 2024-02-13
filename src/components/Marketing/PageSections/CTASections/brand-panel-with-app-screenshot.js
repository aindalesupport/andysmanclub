/* Brand panel with app screenshot ( https://tailwindui.com/components/marketing/sections/cta-sections#component-b731164a9948a780a5a346d9e637b053 ) */

import React from "react";
import SbEditable from "storyblok-react";
import RichText from "src/utils/RichText";
import ImageUrlResolver from 'src/utils/ImageUrlResolver'
import Link from "gatsby-link";

const BrandPanelAppScreenshot = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">{blok.top_title}</span>
                  <span className="block">{blok.secondary_title}</span>
                </h2>
                <span className="mt-4 text-lg leading-6 text-indigo-200 block">
                  <RichText>{blok.content}</RichText>
                </span>
                <Link
                  to={`/${blok.button_link.cached_url}`}
                  className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
                  prefetch="true"
                >
                  {blok.button_label}
                </Link>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src={ImageUrlResolver(blok.image.filename)}
                alt={blok.image.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </SbEditable>
  );
};

export default BrandPanelAppScreenshot;
