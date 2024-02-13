import React, { useEffect, useState } from "react"
import {
  connectHits,
  Index
} from "react-instantsearch-dom"
import Heading from "src/components/Heading"
import DisabledAccessIcon from 'src/images/disabled-access.svg'
import FacebookIcon from 'src/images/facebook.svg'
import SearchResultModal from "./SearchResultModal"

const PageHit = ({ hit, modal, setModal }) => {

  const showModal = () => {
    setModal(hit.objectID)
  }

  return (
      <div className="relative">
        <div class="relative flex justify-between flex-col mb-5 pb-5 border-b border-gray-400">
            <div class="flex justify-between mb-1">
                <span className="uppercase text-darkgrey tracking-[0.06em] text-[11px]">{hit.county}</span>
            </div>
            <button className="text-left" onClick={showModal}>
              <Heading size="h3" className="hover:text-yellow duration-300 !mb-2">
                  {hit.name}
              </Heading>
            </button>
            { hit.coming_soon && <span className="bg-yellow rounded-full w-14 h-14 uppercase font-display text-base leading-[1] text-center inline-flex justify-center items-center absolute right-0 top-0">Coming<br></br>soon</span> }
            <SearchResultModal modal={modal} setModal={setModal} hit={hit} />
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

const Hits = ({ hits, modal, setModal }) => {
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
        {hits.map(hit => (
            <PageHit hit={hit} modal={modal} setModal={setModal} />
        ))}
        {noResults &&
        <div className="max-w-2xl mx-auto flex flex-col justify-center items-center text-center gap-4 py-24">
            <svg className="h-8 w-8 stroke-yellow" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" id='search-icon'>
            <path d="M7.25 12.75C10.5637 12.75 13.25 10.0637 13.25 6.75C13.25 3.43629 10.5637 0.75 7.25 0.75C3.93629 0.75 1.25 3.43629 1.25 6.75C1.25 10.0637 3.93629 12.75 7.25 12.75Z" stroke="current" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.7508 14.25L11.4883 10.9875" stroke="current" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p className="text-black font-semibold text-[20px]">There are no face-to-face locations near to you, email <a className="text-yellow" href="mailto:info@andysmanclub.co.uk">info@andysmanclub.co.uk</a> if you would like information on our online sessions</p>
        </div>
        }
    </>
  )
}

const CustomHits = connectHits(Hits);

const HitsInIndex = ({ index, modal, setModal }) => (
  <Index indexName={index.name}>
    <CustomHits modal={modal} setModal={setModal} />
  </Index>
)

const SearchResult = ({ indices, show, modal, setModal }) => (
  <div>
    {indices.map(index => (
      <HitsInIndex index={index} key={index.name} modal={modal} setModal={setModal} />
    ))}
  </div>
)

export default SearchResult
