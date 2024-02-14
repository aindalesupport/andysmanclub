/* Offset Supporting Text ( https://tailwindui.com/components/marketing/sections/faq-sections#component-8017f4faee579f7ca518cdde140d4689 ) */

import React from "react";
import SbEditable from "storyblok-react";
import RichText from "src/utils/RichText";

const OffsetSupportingText = ({ blok }) => {
    return (
      <SbEditable content={blok}>
        <div class="bg-white">
            <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                <div class="lg:grid lg:grid-cols-3 lg:gap-8">
                    <div>
                        <h2 class="text-3xl font-extrabold text-gray-900">
                        {blok.title}
                        </h2>
                        <span className="mt-4 text-lg text-gray-500 block prose-indigo">
                            <RichText>{blok.content}</RichText>
                        </span>
                    </div>
                    <div class="mt-12 lg:mt-0 lg:col-span-2">
                        <dl class="space-y-12">
                            {
                                blok.items.map((item, index) => {
                                    return (
                                        <SbEditable content={item} key={index}>
                                            <div key={index}>
                                                <dt class="text-lg leading-6 font-medium text-gray-900">
                                                    {item.title}
                                                </dt>
                                                <dd class="mt-2 text-base text-gray-500">
                                                    <RichText>{item.content}</RichText>
                                                </dd>
                                            </div>
                                        </SbEditable>
                                    )
                                })
                            }
                        </dl>
                    </div>
                </div>
            </div>
        </div>
      </SbEditable>
    );
  };
  
  export default OffsetSupportingText;