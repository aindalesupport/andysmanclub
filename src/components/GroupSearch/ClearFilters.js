import React from "react"
import { connectCurrentRefinements } from 'react-instantsearch-dom';

const ClearRefinements = ({ items, refine, className }) => (
  <button className={`block font-body px-6 py-3 text-sm text-[#A0A0A0] bg-[#F2F2F2] font-semibold ${className}`} onClick={() => refine(items)} disabled={!items.length}>
    Clear filters
  </button>
);

export default connectCurrentRefinements(ClearRefinements);