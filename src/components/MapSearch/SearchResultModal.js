import React from "react";
import Slider from "react-slick";
import Heading from "src/components/Heading";
import DisabledAccessIcon from 'src/images/disabled-access.svg'
import FacebookIcon from 'src/images/facebook.svg'

const SearchResultModal = ({ hit, setModal, modal }) => {

    const settings = {
        dots: true,
        arrows: true,
        speed: 500,
        autoplay: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
    };

    return (
        <div className={`relative z-50 ${modal === hit.objectID ? "block" : "hidden"}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
              <div className="relative bg-white px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
                <div className="block absolute top-0 right-0 pt-4 pr-4">
                  <button type="button" className="bg-white rounded-md text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setModal(false)}>
                    <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="sm:flex flex-col sm:items-start py-6">
                    <div className="aspect-1 w-full mb-5">
                        <Slider {...settings}>
                            {hit.images.map(image => <img src={image.filename} key={image.id} alt={image.alt}/>)}
                        </Slider>
                    </div>
                    <div className="relative flex flex-col">
                        <div class="flex justify-between mb-1">
                            <span className="uppercase text-darkgrey tracking-[0.06em] text-[11px]">{hit.county}</span>
                        </div>
                        <Heading size="h3" className="!mb-2">
                            {hit.name}
                        </Heading>    
                        { hit.coming_soon && <span className="bg-yellow rounded-full w-14 h-14 uppercase font-display text-base leading-[1] text-center inline-flex justify-center items-center absolute right-0 top-0">Coming<br></br>soon</span> }
                        <div className="mb-2">
                            <span className="text-darkgrey leading-[20px] text-[14px] mb-3">{hit.address}</span>
                        </div>
                        <p className="text-darkgrey leading-[20px] text-[14px] mb-3">What3words: <a className="hover:text-yellow duration-300" href={`https://what3words.com/${hit.what_3_words.replaceAll('/','')}`} target="_blank" rel="noreferrer">{hit.what_3_words.replaceAll('/','')}</a></p>
                        <div className="flex flex-row gap-x-2 items-center mb-3">
                            { !hit.not_accessible &&
                                <DisabledAccessIcon />
                            }
                            <a className="text-black hover:text-yellow duration-300" href={hit.facebook_url}>
                                <FacebookIcon />
                            </a>
                        </div>
                        <a className="uppercase text-darkgrey tracking-[0.06em] text-[11px] hover:text-yellow duration-300" href={`https://maps.google.com/?q=${hit._geoloc.lat},${hit._geoloc.lng}`} target="_blank" rel="noreferrer">Directions</a>                    
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            
    );
}

export default SearchResultModal

