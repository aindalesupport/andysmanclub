import React from "react"
import { connectPagination } from 'react-instantsearch-dom';

const Pagination = ({ currentRefinement, nbPages, refine, createURL }) => (
  <ul className="flex flex-row justify-center py-16">
    {new Array(nbPages).fill(null).map((_, index) => {
      const page = index + 1;

      return (
        <li key={index}>
          <a
            href={createURL(page)}
            onClick={event => {
              event.preventDefault();
              refine(page);
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;              
            }}
            className={`font-body px-4 py-4 text-base border-yellow hover:text-yellow duration-300 ${currentRefinement === page ? 'text-yellow border-t-2 font-semibold' : 'text-black'}`}
          >
            {page}
          </a>
        </li>
      );
    })}
  </ul>
);

export default connectPagination(Pagination);