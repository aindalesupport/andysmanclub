import React from 'react'
import SbEditable from 'storyblok-react'

const SimpleThreeColumn = ({ blok }) => {
    return (
        <SbEditable content={blok}>
            <div className="py-16 sm:py-24 bg-white">
                <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                    {
                        blok.columns.map((item, index) => {
                            return (
                            <div key={index}>
                                <dt>
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white text-xl mb-5">
                                        <i className={`${item.icon}`}></i>
                                    </div>
                                    <p className="text-lg leading-6 font-medium text-gray-900 mb-2">{item.title}</p>
                                </dt>
                                <dd className="text-base text-gray-500">{item.description}</dd>
                            </div>
                            )
                        })
                    }
                    </dl>
                </div>
            </div>      
        </SbEditable>  
    )
}

export default SimpleThreeColumn