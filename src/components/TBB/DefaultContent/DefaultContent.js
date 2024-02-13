import React from 'react'
import SbEditable from "storyblok-react"
import RichText from 'src/utils/RichText'
import Heading from 'src/components/Heading'
import Button from 'src/components/Button'
import Label from 'src/components/Label'

const Hero = ({ blok }) => {
    return (
        <SbEditable content={blok} key={blok._uid}>
            <div className="bg-white">
                <div className="max-w-7xl mx-auto my-16 px-8">
                    <Label className="mb-4">This is a label</Label>
                    <Heading size="h1">Heading 1</Heading>
                    <Heading size="h2">Heading 2</Heading>
                    <Heading size="h3">Heading 3</Heading>
                    <Heading size="h4">Heading 4</Heading>
                    <Heading size="h5">Heading 5</Heading>
                    <Heading size="h6">Heading 6</Heading>
                    <Button
                        to={blok.button_target?.cached_url}
                        target={blok.button_target?.linktype !== 'story' ? '_blank' : ''}
                        >
                        {blok.button_text}
                    </Button>
                    <div className="bg-black p-6 mt-4">
                        <Button
                            to={blok.button_target?.cached_url}
                            target={blok.button_target?.linktype !== 'story' ? '_blank' : ''}
                            onBlackBackground
                            className="border-2"
                            >
                            {blok.button_text}
                        </Button>
                    </div>
                    <div className="prose mt-12">
                        <RichText>{blok.main_content}</RichText>
                    </div>
                </div>
            </div>
        </SbEditable>
    )
}

export default Hero