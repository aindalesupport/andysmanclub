import React from "react"
import DynamicComponent from "./DynamicComponent"
import SbEditable from 'storyblok-react'
import Seo from "../utils/seo"

const Page = ({ blok }) => {
  const content =
    blok.body &&
    blok.body.map(childBlok => <DynamicComponent blok={childBlok} key={childBlok._uid}/>)
  return (
    <SbEditable content={blok} key={blok._uid}>
        <Seo title={blok.meta?.title} description={blok.meta?.description} />
        {content}
    </SbEditable>
  )
}

export default Page
