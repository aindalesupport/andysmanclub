import React, { useContext } from "react"
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"
import favicon from '/static/amc-favicon.png'
import StoryblokService from '../utils/storyblok-service'
import { PageContext } from "../utils/context"
// import CookiePopup from "./CookiePopup"

export default function Layout({ children, location, isEditor }){
  const { background_color } = useContext(PageContext)

  const { settings } = useStaticQuery(graphql`
  query Settings {
    settings: allStoryblokEntry(filter: {field_component: {eq: "settings"}}) {
      edges {
        node {
          name
          full_slug
          content
        }
      }
    }
  }
  `)
  let content = JSON.parse(settings.edges[0].node.content)
  let parsedSetting = Object.assign({}, content, {content: content})

  return (
    <div className={`duration-1000 transition-colors ${background_color}`}>
      { isEditor ? 
        (<>
        <Helmet
            script={[
              {"src": `//app.storyblok.com/f/storyblok-latest.js?t=${StoryblokService.token}`,
              "type": "text/javascript"}
            ]}
        />
        <Helmet
            script={[
              {
              "innerHTML": `var StoryblokCacheVersion = '${StoryblokService.getCacheVersion()}';`,
              "type": "text/javascript"
              }
            ]}
        />
        </>) : null
      }
      <Helmet>
        <link rel="icon" href={favicon} />
        <link rel="stylesheet" href="https://use.typekit.net/hdy0bey.css"/>
        <script src="https://kit.fontawesome.com/e86587c99a.js" crossorigin="anonymous"></script>
      </Helmet>
      <Header settings={parsedSetting} />
      <main className={`font-body overflow-x-hidden`}>
        {children}
      </main>
      <Footer settings={parsedSetting} />
      {/* <CookiePopup/> */}
    </div>
  )
}
