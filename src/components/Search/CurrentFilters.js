import React from "react";
import ClearFilters from "./ClearFilters"
import { connectCurrentRefinements } from "react-instantsearch-dom";
import TitleCase from "../../utils/TitleCase";

const CurrentRefinements = ({ items, refine, createURL }) => {
  return (
    items.length > 0 &&
        <div>
            <ClearFilters className="mt-6 lg:block hidden"/>
            <div className="font-body font-medium text-[11px] tracking-[0.06em] uppercase text-darkgrey mb-4 lg:mt-6">Selected</div>
            <ul className="flex lg:flex-col flex-row flex-wrap lg:pb-6 gap-2 border-b border-[#E0E0E0]">
            {items.map((item) => (
                item.items ? (
                    <React.Fragment>
                        {item.items.map((nested) => (
                            <li className="bg-yellow text-black font-semibold py-3 px-4 font-body lg:text-sm text-base self-start" key={nested.label}>
                                <a
                                    href={createURL(nested.value)}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        refine(nested.value);
                                    }}
                                >
                                    {TitleCase(nested.label.replace(/-/g, ' ').replace(/_/g, ' '))}
                                    <i class="far fa-times ml-3 mt-1" aria-hidden="true"></i>
                                </a>
                            </li>
                        ))}
                    </React.Fragment>
                ) : (
                    <a
                        href={createURL(item.value)}
                        onClick={(event) => {
                            event.preventDefault();
                            refine(item.value);
                        }}
                    >
                        {item.label.replace(/-/g, ' ').replace(/_/g, ' ')}
                    </a>
                )
            ))}
            </ul>
        </div>
  )
}

export default connectCurrentRefinements(CurrentRefinements);