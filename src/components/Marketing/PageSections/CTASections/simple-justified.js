/* Simple Justified ( https://tailwindui.com/components/marketing/sections/cta-sections#component-90c79fbd0596cc4e601da985ca825994 ) */

import React from "react";
import SbEditable from "storyblok-react";
import Link from "gatsby-link";

const SimpleJustified = ({ blok }) => {
    return (
      <SbEditable content={blok}>
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">{blok.top_title}</span>
                <span className="block text-indigo-600">{blok.bottom_title}</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <Link
                            to={`/${blok.left_btn_url.cached_url}`}
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                            prefetch="true"
                            >
                            {blok.left_btn_label}
                        </Link>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <Link
                            to={`/${blok.right_btn_url.cached_url}`}
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                            prefetch="true"
                            >
                            {blok.right_btn_label}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </SbEditable>
    );
  };
  
  export default SimpleJustified;