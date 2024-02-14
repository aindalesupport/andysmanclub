import React from 'react'
import Img from 'gatsby-image'
import { getFixedGatsbyImage } from 'gatsby-storyblok-image'

const FixedImage = ({ image, className }) => {

  const fixedProps = image.filename ? [
    getFixedGatsbyImage(image.filename, { maxWidth: 2560, quality: 80 }),
      {
          ...getFixedGatsbyImage(image.filename, { maxWidth: 1536, quality: 80 }),
          media: `(max-width: 1536px, min-width 1280px)`,
      },
      {
          ...getFixedGatsbyImage(image.filename, { maxWidth: 1280, quality: 80 }),
          media: `(max-width: 1280px, min-width: 1024px)`,
      },
      {
          ...getFixedGatsbyImage(image.filename, { maxWidth: 1024, quality: 80 }),
          media: `(max-width: 1024px, min-width: 768px)`,
      },
      {
          ...getFixedGatsbyImage(image.filename, { maxWidth: 768, quality: 80 }),
          media: `(max-width: 768px)`,
      },
  ] : ''

  return (
    <Img 
      fixed={fixedProps}
      placeholderStyle={{filter:`blur(1rem)`}} 
      className={className}
      alt={image?.alt}
    />
  )
}

export default FixedImage
