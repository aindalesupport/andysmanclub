/*

Stat for WithTestimonialAndStats Block

*/

import React from "react";
import SbEditable from "storyblok-react";

const Stat = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="border-t-2 border-gray-100 pt-6">
        <dt className="text-base font-medium text-gray-500">
          {blok.stat_title}
        </dt>
        <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
          {blok.stat_content}
        </dd>
      </div>
    </SbEditable>
  );
};

export default Stat;
