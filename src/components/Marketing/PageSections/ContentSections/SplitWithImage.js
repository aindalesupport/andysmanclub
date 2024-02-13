
/*  SPLIT WITH IMAGE ( https://tailwindui.com/components/marketing/sections/content-sections#component-be88a98fa8e54342829a636bd0bff3f6 )  */

import React from 'react'
import SbEditable from 'storyblok-react'
import RichText from 'src/utils/RichText'
import ImageUrlResolver from 'src/utils/ImageUrlResolver'


const SplitWithImage = ({ blok }) => {
    return (
        <SbEditable content={blok}>
        <div className="relative bg-white">
            <div className="lg:absolute lg:inset-0">
                <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover lg:absolute lg:h-full"
                        src={ImageUrlResolver(blok.image.filename)}
                        alt={blok.image.alt}
                    />
                </div>
            </div>
            <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
                <div className="lg:col-start-2 lg:pl-8">
                    <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                        <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">{blok.label}</h2>
                        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{blok.title}</h3>
                        <div className="mt-8 text-lg text-gray-500">
                            <RichText>{blok.intro_copy}</RichText>
                        </div>
                        <div className="mt-5 prose prose-indigo text-gray-500">
                            <RichText>{blok.content}</RichText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </SbEditable>
    )
}

export default SplitWithImage