import React from "react"
import { connectRefinementList } from 'react-instantsearch-dom';
import TitleCase from "../../utils/TitleCase";

const RefinementList = ({
  items,
  isFromSearch,
  refine,
  searchForItems,
  createURL,
}) => (
  <div>
    <div className="text-[11px] tracking-[0.06em] font-body uppercase text-darkgrey mb-4 font-medium">Search by region</div>
    <ul className="flex flex-row flex-wrap gap-x-4 gap-y-7 lg:pr-24">
    {items.map(item => (
      <li key={item.label}>
        <a
          href={createURL(item.value)}
          onClick={event => {
            event.preventDefault();
            refine(item.value);
          }}
        >
            <label className={`cursor-pointer py-3 px-4 font-body lg:text-sm text-base font-semibold transition duration-300 ${item.isRefined ? "bg-yellow text-black" : "bg-gray-100 text-darkgrey hover:bg-gray-200"}`}>
                {TitleCase(item.label.replace(/-/g, ' ').replace(/_/g, ' '))}
            </label>          
        </a>
      </li>
    ))}
    </ul>
  </div>
);

export default connectRefinementList(RefinementList);
