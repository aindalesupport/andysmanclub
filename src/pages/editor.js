import React from 'react'
import Page from '../components/Page'
import Layout from "../components/Layout"
import StoryblokService from '../utils/storyblok-service'
import { PageContext } from "src/utils/context";
import ContentHeading from "src/components/ContentHeading"
import SetCookie from "src/utils/SetCookie";
import GetCookie from "src/utils/GetCookie";

export default class Editor extends React.Component {
  state = {
    story: null,
    cta_referrer: null,
    background_color: null,
  }
 
  async getInitialStory() {
    const urlParams = new URLSearchParams(window.location.search);
    const path = urlParams.get('path')    
    let { data: { story } } = await StoryblokService.get(`cdn/stories/${path}`, {version: 'draft'})
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
    if(this.state.story === null) {
      return (<div>Loading</div>)
    }
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
        <Layout location={this.props.location} isEditor={true}>
          {this.state.story.content.component === 'news_views' &&
            <ContentHeading/>
          }
          <Page blok={this.state.story.content} />
        </Layout>
      </PageContext.Provider>
    )
  }
}