import { default as React, useState, Fragment } from "react"
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import {
  GoogleMapsLoader,
  GeoSearch,
  CustomMarker,
} from 'react-instantsearch-dom-maps';
import Heading from 'src/components/Heading';
import SearchResult from './SearchResult';
import Places from './Places'
import MapMarker from 'src/images/map-marker.svg'

const googleMapStyles = require("./GoogleMapStyles.json")

const MapSearch = ({ indices }) => {

    const searchClient = algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY,
        {
          _useRequestCache: true,
        }
      );

    const [searchState] = useState();

    const [modal, setModal] = useState(false);

    return (
      <InstantSearch
        searchClient={searchClient}
        indexName="Groups"
      >
        <GoogleMapsLoader apiKey={process.env.GATSBY_GOOGLE_MAPS_API_KEY} endpoint="https://maps.googleapis.com/maps/api/js?v=weekly&libraries=places">
                {(google) => (
                  <>
        <div className="w-full bg-black">
            <div className="max-w-8xl mx-auto px-6 py-16">
                <Heading size="h1" className="text-white text-8xl lg:text-9xl w-3/4 !leading-[0.8em]">Find your nearest group.</Heading>
                <p className="text-white max-w-prose py-8">Enter your town or city in the text box, then select it from the drop down options to find the nearest ANDYSMANCLUB groups to where you are and join us on Mondays at 7pm. If you can’t find a group near you and you want to join us online, please contact us.</p>
            </div>
        </div>
        <div className="max-w-7xl mx-auto pb-8">
            <div className="w-full lg:-mt-10 -mt-10 relative z-100">
                <div className="lg:max-w-6xl flex-grow mx-auto w-11/12 bg-white relative">
                    <Configure aroundRadius={48280} aroundLatLngViaIP={false} />
                    <Places defaultRefinement={{lat: 53.7211088, lng: -1.4932721}} />
                </div>
            </div>
        </div>
        <div className="max-w-6xl mx-auto pb-16 flex flex-wrap gap-x-12">
          <div className="w-11/12 mx-auto md:w-8/12">
            <div className="aspect-[9/16] md:aspect-[1/1]">
                  <GeoSearch
                  google={google}
                  initialZoom={6}
                  maxZoom={16}
                  minZoom={6}
                  options={{
                    styles: googleMapStyles,
                    mapTypeControl: false,
                    streetViewControl: false,
                    gestureHandling: "none",
                    zoomControl: false,
                  }}>
                    {({ hits }) => (
                      <Fragment>
                        {hits.map((hit) => (
                          <CustomMarker key={hit.objectID} hit={hit}>
                            <button className="inline" onClick={() => setModal(hit.objectID)}>
                              <MapMarker/>
                            </button>
                          </CustomMarker>
                        ))}
                      </Fragment>
                    )}
                  </GeoSearch>
            </div>
          </div>
          <div className="w-11/12 mx-auto md:w-4/12 flex-1 md:overflow-hidden flex flex-col">
            <div className="md:flex-grow md:basis-0 md:overflow-y-auto px-6 py-6 md:py-0">
              <SearchResult 
                  show={searchState && searchState.length > 0} 
                  indices={indices} modal={modal} setModal={setModal}
              />
            </div>
          </div>
        </div>
        </>
          )}
          </GoogleMapsLoader>
  </InstantSearch>
    )
}

export default MapSearch;