import React from 'react'
import SbEditable from 'storyblok-react'
import FluidImage from 'src/utils/FluidImage'

const FullWidthImage = ({blok}) => {
    return (
        <SbEditable content={blok} key={blok._uid}>
            <div className="bg-white">
                <div className={`relative ${blok.make_full_screen ? 'w-full' : 'max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20'}`}>
                    <FluidImage className="object-cover object-center w-100" image={blok.image}/>
                    {blok.caption && <p className="italic text-xs mt-3">{blok.caption}</p>}
                 </div>
            </div>
        </SbEditable>
    )
};

export default FullWidthImage;