import React from "react"
import Page from '../components/Page'
import Layout from "../components/Layout"
import { graphql } from 'gatsby'
import StoryblokService from '../utils/storyblok-service'
import { PageContext } from "src/utils/context";
import ContentHeading from "src/components/ContentHeading"
import SetCookie from "src/utils/SetCookie";
import GetCookie from "src/utils/GetCookie";
 
export default class PageTemplate extends React.Component {
  state = {
    story: {
       content: this.props.data.story ? JSON.parse(this.props.data.story.content) : {},
       cta_referrer: null,
    },
    background_color: "bg-white"
  }
 
  async getInitialStory() {
    StoryblokService.setQuery(this.props.location.search)
    let { data: { story } } = await StoryblokService.get(`cdn/stories/${this.props.data.story.full_slug}`)
    return story
  }
 
  async componentDidMount() {
    let story = await this.getInitialStory()
    if(story.content) this.setState({ story })
    setTimeout(() => StoryblokService.initEditor(this), 200)
    if( this.getCtaReferrer() ) {
      this.setCtaReferrer(this.getCtaReferrer())
    } 
  }

  getCtaReferrer = () => {
    return GetCookie("cta_referrer");
  }  

  setCtaReferrer = (value) => {
    SetCookie(`cta_referrer=${value}`)
    this.setState({ cta_referrer: value })
  }
 
  setBackgroundColor = (color) => {
    this.setState({ background_color: color })
  }

  render() {
    return (
      <PageContext.Provider
        value={{
          currentPage: this.state.story.uuid,
          location: this.props.location,
          name: this.state.story.name,
          first_published_at: this.state.story.first_published_at,
          content: this.state.story.content,
          tag_list: this.state.story.tag_list,
          setCtaReferrer: this.setCtaReferrer,
          ctaReferrer: this.state.cta_referrer,
          background_color: this.state.background_color,
          setBackgroundColor: this.setBackgroundColor,          
        }}
      >
        <Layout location={this.props.location}>
          {this.state.story.content.component === 'news_views' &&
            <ContentHeading/>
          }
          <Page blok={this.state.story.content} />
        </Layout>
      </PageContext.Provider>
    )
  }
}

 
export const query = graphql`
  query storyBySlug($fullSlug: String!) {
    story: storyblokEntry(full_slug: { eq: $fullSlug }) {
      name
      content
      full_slug
      uuid
    }
  }
`