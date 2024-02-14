import { Link } from "gatsby";
import resolveLink from "../../utils/resolveLink";
import React, { useEffect, useState } from "react";
import { connectHits, Index } from "react-instantsearch-dom";
import Heading from "src/components/Heading";
import FluidImage from "src/utils/FluidImage";

const PageHit = ({ hit }) => {
  return (
    <Link class="group relative" to={resolveLink(`/${hit.full_slug}`)}>
      <div class="min-h-80 relative aspect-[750/500] w-full overflow-hidden">
        {hit.featured_image && (
          <FluidImage
            className="h-full w-full object-center grayscale-0 duration-300 group-hover:grayscale-0 lg:h-full lg:w-full lg:grayscale"
            image={hit.featured_image}
            alt={hit.featured_image.alt}
          />
        )}
      </div>
      <div class="mt-4 flex flex-col justify-between">
        <span className="mb-1 block text-[11px] uppercase tracking-[0.06em] text-darkgrey">
          {hit.tag_list.join(", ")}
        </span>
        <Heading
          size="h3"
          className="!leading-[1.75rem] duration-300 group-hover:text-yellow lg:!leading-[2rem]"
        >
          {hit.name}
        </Heading>
      </div>
    </Link>
  );
};

const Hits = ({ hits }) => {
  const [noResults, setNoResults] = useState();
  // Check if there are any search results
  useEffect(() => {
    if (hits.length < 1) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
  }, [hits]);

  return (
    <>
      <div className="mx-auto mt-6 grid max-w-7xl grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {hits.map((hit) => (
          <PageHit hit={hit} />
        ))}
      </div>
      {noResults && (
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-4 py-24 text-center">
          <svg
            className="h-8 w-8 stroke-yellow"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="search-icon"
          >
            <path
              d="M7.25 12.75C10.5637 12.75 13.25 10.0637 13.25 6.75C13.25 3.43629 10.5637 0.75 7.25 0.75C3.93629 0.75 1.25 3.43629 1.25 6.75C1.25 10.0637 3.93629 12.75 7.25 12.75Z"
              stroke="current"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.7508 14.25L11.4883 10.9875"
              stroke="current"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-[20px] font-semibold text-black">
            Sorry, we didn’t find any matches for your search.
          </p>
        </div>
      )}
    </>
  );
};

const CustomHits = connectHits(Hits);

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <CustomHits />
  </Index>
);

const SearchResult = ({ indices, show }) => (
  <div>
    <Heading size="h3" className="hidden lg:block">
      News &amp; views
    </Heading>
    {indices.map((index) => (
      <HitsInIndex index={index} key={index.name} />
    ))}
  </div>
);

export default SearchResult;
