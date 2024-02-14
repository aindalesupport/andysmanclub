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
  <ul className="py-6">
    <div className="text-[11px] tracking-[0.06em] font-body uppercase text-darkgrey mb-4 font-medium">Filter by content type</div>
    {items.map(item => (
      <li key={item.label}>
        <a
          href={createURL(item.value)}
          onClick={event => {
            event.preventDefault();
            refine(item.value);
          }}
        >
            <div className="flex flex-row items-center group my-1">
                <div className="relative h-4 w-4 flex justify-center items-center">
                  <div className={`absolute top-0 left-0 h-4 w-4 bg-white text-white focus:ring-0 ring-0 focus:outline-none outline-none pointer-events-none border group-hover:!border-black duration-300 rounded-full ${item.isRefined ? '!border-yellow border-[5px]' : '!border-[#E1E1E2]'}`}></div>
                </div>
                <label for="color-0" className={`ml-2 font-body lg:text-[14px] text-base cursor-pointer mt-0.5 group-hover:text-brightgreen duration-300 ${item.isRefined ? "text-brightgreen font-semibold" : "font-normal text-blue"}`}>
                    {TitleCase(item.label.replace(/-/g, ' ').replace(/_/g, ' '))}
                </label>
            </div>          
        </a>
      </li>
    ))}
  </ul>
);

export default connectRefinementList(RefinementList);