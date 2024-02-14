import { Link } from "gatsby"
import resolveLink from "../../utils/resolveLink"
import React, { useEffect, useState } from "react"
import {
  connectHits,
  Index
} from "react-instantsearch-dom"
import Heading from "src/components/Heading"
import FluidImage from 'src/utils/FluidImage'
import DisabledAccessIcon from 'src/images/disabled-access.svg'
import FacebookIcon from 'src/images/facebook.svg'


const PageHit = ({ hit }) => {
  return (
    <div class="group relative text-left">
        <div class="relative w-full min-h-80 overflow-hidden aspect-[750/500] bg-gray-300">
          { hit.images && <FluidImage className="w-full h-full object-center lg:w-full lg:h-full grayscale-0 lg:grayscale group-hover:grayscale-0 duration-300" image={hit.images[0]} alt={hit.images[0]?.alt}/> }
        </div>
        <div class="mt-4 flex justify-between flex-col">
            <span className="block uppercase text-darkgrey tracking-[0.06em] text-[11px] mb-1">{hit.tag_list.join(', ')}</span>
            <Heading size="h3" className="lg:!leading-[2rem] !leading-[1.75rem]">
                {hit.name}
            </Heading>
            <p className="text-darkgrey leading-[20px] text-[14px] mb-3">{hit.address}</p>
            <p className="text-darkgrey leading-[20px] text-[14px] mb-3">What3words: <a className="hover:text-yellow duration-300" href={`https://what3words.com/${hit.what_3_words.replaceAll('/','')}`} target="_blank">{hit.what_3_words.replaceAll('/','')}</a></p>
            <div className="flex flex-row gap-x-2 items-center mb-3">
              { !hit.not_accessible &&
                <DisabledAccessIcon />
              }
              <a className="text-black hover:text-yellow duration-300" href={hit.facebook_url}>
                <FacebookIcon />
              </a>
            </div>            
            <a className="uppercase text-darkgrey tracking-[0.06em] text-[11px] hover:text-yellow duration-300" href={`https://maps.google.com/?q=${hit._geoloc.lat},${hit._geoloc.lng}`} target="_blank">Directions</a>                    
        </div>
    </div>    
  )
}

const Hits = ({ hits }) => {
  const [noResults, setNoResults] = useState()
  // Check if there are any search results
  useEffect(() =>{
    if( hits.length < 1 ) {
      setNoResults(true)
    } else {
      setNoResults(false)
    }
  }, [hits])

  return (
    <>
    <div className="max-w-7xl mx-auto mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {hits.map(hit => (
        <PageHit hit={hit} />
      ))}
    </div>
    {noResults &&
      <div className="max-w-2xl mx-auto flex flex-col justify-center items-center text-center gap-4 py-24">
        <svg className="h-8 w-8 stroke-yellow" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" id='search-icon'>
          <path d="M7.25 12.75C10.5637 12.75 13.25 10.0637 13.25 6.75C13.25 3.43629 10.5637 0.75 7.25 0.75C3.93629 0.75 1.25 3.43629 1.25 6.75C1.25 10.0637 3.93629 12.75 7.25 12.75Z" stroke="current" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.7508 14.25L11.4883 10.9875" stroke="current" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p className="text-black font-semibold text-[20px]">Sorry, we didn't find any matches for your search. If you would like to attend an online session, please email <a className="text-yellow" href="mailto:info@andysmanclub.co.uk">info@andysmanclub.co.uk</a></p>
      </div>
    }
    </>
  )
}

const CustomHits = connectHits(Hits);

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <CustomHits />
  </Index>
)

const SearchResult = ({ indices, show }) => (
  <div>
    <Heading size="h3" className="lg:block hidden">Group Locations</Heading>
    {indices.map(index => (
      <HitsInIndex index={index} key={index.name} />
    ))}
  </div>
)

export default SearchResult