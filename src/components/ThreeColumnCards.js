import React, { useContext, useRef } from 'react'
import SbEditable from 'storyblok-react'
import Label from 'src/components/Label'
import Button from 'src/components/Button'
import Heading from 'src/components/Heading'
import GetAny from 'src/utils/GetAny'
import ArchiveItem from 'src/components/ArchiveItem'
import { PageContext } from "src/utils/context";
import InView from "src/utils/InView";
import useBackground from '../utils/useBackground'

const TwoColumnText = ({ blok }) => {
  const ref = useRef();
  const isVisible = InView(ref, false);

  const animationFadeUp = `duration-1000 opacity-0 translate-y-8 delay-500 ${
    isVisible && "!opacity-100 !translate-y-0"
  }`;

    useBackground({ isVisible, color: blok.background_color });

    const { currentPage } = useContext(PageContext)
    const items = blok.items.length > 0 ? GetAny(blok.items) : GetAny(blok.items, 'news_views', 3, currentPage)
    return (
        <SbEditable content={blok} key={blok._uid}>
            <div>
                <div className={`max-w-8xl mx-auto px-6 lg:my-52 my-32 ${animationFadeUp}`} ref={ref}>
                    <div className="flex md:flex-row flex-col md:items-end items-start justify-between gap-5">
                        <div>
                            <Label className={`mb-10`}>{blok.custom_label ? blok.custom_label : "The latest"}</Label>
                            <Heading size="h2" className={`mb-0 lg:!text-[110px] !text-6xl !leading-[0.8] text-black`}>{blok.custom_title ? blok.custom_title : blok.items.length > 0 ? 'News & Views' : 'Related News'}</Heading>
                        </div>
                        <Button to="/news-and-views/">See everything</Button>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-6 lg:gap-y-20 gap-y-10 lg:mt-20 mt-16">
                        {items.map((item) => (
                            <ArchiveItem {...item} key={item.uuid}/>
                        ))}
                    </div>
                </div>
            </div>        
        </SbEditable>
    )
}

export default TwoColumnText