import React from "react";
import Img from "gatsby-image";
import { getFluidGatsbyImage } from "gatsby-storyblok-image";

const FluidImage = ({ image, className }) => {
  const isSvg = image?.filename?.includes(".svg");

  const fluidProps = image?.filename
    ? [
        {
          ...getFluidGatsbyImage(image.filename, {
            maxWidth: 1280,
            quality: 60,
            smartCrop: false,
          }),
          media: `(min-width: 1536px)`,
        },
        {
          ...getFluidGatsbyImage(image.filename, {
            maxWidth: 1280,
            quality: 60,
            smartCrop: false,
          }),
          media: `(min-width: 1280px)`,
        },
        {
          ...getFluidGatsbyImage(image.filename, {
            maxWidth: 1024,
            quality: 60,
            smartCrop: false,
          }),
          media: `(min-width: 1024px)`,
        },
        {
          ...getFluidGatsbyImage(image.filename, {
            maxWidth: 768,
            quality: 60,
            smartCrop: false,
          }),
          media: `(min-width: 768px)`,
        },
      ]
    : "";

  return isSvg ? (
    <img className={className} alt={image?.alt} src={image.filename} /> // eslint-disable-line
  ) : (
    <Img
      className={className}
      alt={image?.alt}
      fluid={fluidProps}
      placeholderStyle={{ filter: `blur(1rem)` }}
    />
  );
};

export default FluidImage;
