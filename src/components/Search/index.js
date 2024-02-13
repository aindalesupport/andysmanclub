import {
  createRef,
  default as React,
  useState,
  useMemo,
  useEffect,
  useRef,
} from "react";
import algoliasearch from "algoliasearch";
import { InstantSearch } from "react-instantsearch-dom";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";
import CurrentFilters from "./CurrentFilters";
import ContentTypeFilter from "./ContentTypeFilter";
import Pagination from "./Pagination";
import persistantOrder from "./persistantOrder";
import useClickOutside from "./useClickOutside";
import Heading from "src/components/Heading";
import MobileFilters from "./MobileFilters";
import qs from "qs";
import { navigate } from "gatsby";
import { BrowserView, MobileView } from "react-device-detect";

const Search = ({ indices, location }) => {
  const createURL = (state) => `?${qs.stringify(state)}`;

  const searchStateToUrl = (searchState) =>
    searchState ? createURL(searchState) : "";

  const urlToSearchState = ({ search }) => {
    return qs.parse(search.slice(1));
  };

  const rootRef = createRef();
  const [hasFocus, setFocus] = useState(false);
  const DEBOUNCE_TIME = 400;
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
      ),
    []
  );
  useClickOutside(rootRef, () => setFocus(false));

  const [searchState, setSearchState] = useState(urlToSearchState(location));
  const debouncedSetStateRef = useRef(null);

  function onSearchStateChange(updatedSearchState) {
    clearTimeout(debouncedSetStateRef.current);

    debouncedSetStateRef.current = setTimeout(() => {
      navigate(searchStateToUrl(updatedSearchState));
    }, DEBOUNCE_TIME);

    setSearchState(updatedSearchState);
  }

  useEffect(() => {
    setSearchState(urlToSearchState(location));
  }, [location]);

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
      searchState={searchState}
      onSearchStateChange={onSearchStateChange}
      createURL={createURL}
    >

      <div className="relative flex h-[30vh] w-full items-center justify-center bg-black">
        <Heading
          size="h1"
          className="px-6 text-center text-white lg:!text-[7rem]"
        >
          News &amp; views
        </Heading>
      </div>
      <div className="mx-auto max-w-7xl pb-16">
        <div className="z-100 relative -mt-10 w-full lg:-mt-10">
          <div className="mx-auto w-11/12 flex-grow shadow-lg lg:max-w-6xl">            
            <SearchBox
              onFocus={() => setFocus(true)}
              hasFocus={hasFocus}
              className="relative"
            />
            {
              <MobileView>
                <MobileFilters>
                  <CurrentFilters />
                  <ContentTypeFilter
                    attribute="tag_list"
                    limit={100}
                    transformItems={(items) => persistantOrder(items)}
                  />
                </MobileFilters>           
              </MobileView>              
            }
          </div>
        </div>
        <div className="flex flex-row py-12 lg:py-16">
          <div className="hidden w-1/5 px-6 lg:block">
            <Heading size="h3">Filters</Heading>
            {
              <BrowserView>
                <CurrentFilters />
                <ContentTypeFilter
                  attribute="tag_list"
                  limit={100}
                  transformItems={(items) => persistantOrder(items)}
                />
              </BrowserView>              
            }
          </div>
          <div className="w-full px-6 lg:w-4/5 lg:px-0">
            <SearchResult
              show={searchState && searchState.length > 0 && hasFocus}
              indices={indices}
            />
          </div>
        </div>
        <div>
          <Pagination />
        </div>
      </div>
    </InstantSearch>
  );
};

export default Search;
