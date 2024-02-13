/*

Simple (https://tailwindui.com/components/marketing/feedback/404-pages#component-ebef3404d06e7b5f42e85b7b2ca4a2a5)

*/

import React from "react";
import SbEditable from "storyblok-react";
import RichText from 'src/utils/RichText';
import Link from "gatsby-link";

const Simple404 = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="bg-white min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="max-w-max mx-auto">
        <main className="sm:flex">
          <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">404</p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">{blok.title}</h1>
              <span className="mt-1 text-base text-gray-500 block"><RichText>{blok.content}</RichText></span>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <Link
                  to={`/${blok.left_button_link.cached_url}`}
                  prefetch="true"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {blok.left_button_label}
                </Link>
                <Link
                  to={`/${blok.right_button_link.cached_url}`}
                  prefetch="true"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {blok.right_button_label}
                </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
    </SbEditable>
  );
};

export default Simple404;

