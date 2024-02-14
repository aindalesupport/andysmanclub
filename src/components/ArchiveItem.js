import React from 'react'
import FluidImage from 'src/utils/FluidImage'
import Label from 'src/components/Label'
import resolveLink from 'src/utils/resolveLink'
import Heading from 'src/components/Heading'
import { Link } from 'gatsby'

const ArchiveItem = (props) => {
    return (
        <Link to={resolveLink(props.full_slug)} className="group">
            <FluidImage image={props.content.featured_image} className="mb-6 lg:grayscale group-hover:grayscale-0 duration-300"/>
            <Label className="mb-2 !text-[0.8rem]">{props.tag_list.join(', ')}</Label>
            <Heading size="h3" className="mb-0 !leading-[0.9] text-black">{props.name}</Heading>
        </Link>
    )
}

export default ArchiveItem