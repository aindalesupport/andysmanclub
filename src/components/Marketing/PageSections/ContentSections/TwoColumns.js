
/*  TWO COLUMNS ( https://tailwindui.com/components/marketing/sections/content-sections#component-176f404f597838293fd652b71bf0726f )  */

import React from 'react'
import SbEditable from 'storyblok-react'
import RichText from 'src/utils/RichText'


const TwoColumns = ({ blok }) => {
    return (
        <SbEditable content={blok}>
            <div className="py-16 xl:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
                <div className="max-w-max lg:max-w-7xl mx-auto">
                    <div className="relative z-10 mb-8 md:mb-2 md:px-6">
                        <div className="text-base max-w-prose lg:max-w-none">
                            <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">{blok.label}</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{blok.title}</p>
                        </div>
                    </div>
                    <div className="relative">
                        <svg className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                            <defs>
                                <pattern id="95e8f2de-6d30-4b7e-8159-f791729db21b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="404" height="384" fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
                        </svg>
                        <svg className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                            <defs>
                                <pattern id="7a00fe67-0343-4a3c-8e81-c145097a3ce0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="404" height="384" fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
                        </svg>
                        <div className="relative md:bg-white md:p-6">
                            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                                <div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                                    <RichText>{blok.content_left}</RichText>
                                </div>
                                <div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                                    <RichText>{blok.content_right}</RichText>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SbEditable>
    )
}

export default TwoColumns