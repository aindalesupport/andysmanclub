import React from 'react'
import RichText from 'src/utils/RichText'

const ContentCtaCentered = (props) => {
    return (
        <div className="bg-black my-12 lg:p-12 md:p-10 p-6 lg:mx-0 -mx-6 break-all">
            <h4 className="text-base text-white not-prose !mt-0 !mb-5 font-semibold">{props.title}</h4>
            <div className="prose text-white">
                <RichText>{props.content}</RichText>
            </div>
        </div>
    )
  };

export default ContentCtaCentered;
