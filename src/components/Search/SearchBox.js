import React, { useState } from "react";
import { connectSearchBox, PoweredBy } from "react-instantsearch-dom";

export default connectSearchBox(
  ({ refine, currentRefinement, className, onFocus }) => {
    const [color, setColor] = useState("lg:stroke-darkgrey stroke-[#BDBDBD]");

    const handleFocus = () => {
      setColor("stroke-yellow");
    };

    const handleBlur = () => {
      setColor("lg:stroke-darkgrey stroke-[#BDBDBD]");
    };

    let timerId = null;
    const delay = 1000;

    const [newRefinement, setNewRefinement] = useState(currentRefinement);

    const onChangeDebounced = (event) => {
      const value = event.currentTarget.value;

      clearTimeout(timerId);
      timerId = setTimeout(() => refine(value), delay);

      setNewRefinement(value);
    };

    return (
      <form
        className={className}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 -mt-1 flex items-center px-6">
          <svg
            className={color}
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
        </div>
        <input
          className="mx-auto block w-full !border-0 bg-white py-8 pr-20 pl-12 text-[16px] tracking-tight text-darkgrey placeholder:text-[#BDBDBD] focus:text-black focus:shadow-none focus:outline-none focus:ring-0 focus:ring-transparent md:text-[18px] lg:placeholder:text-darkgrey text-ellipsis"
          type="text"
          placeholder="What do you want to search for?..."
          aria-label="Search"
          onChange={(e) => onChangeDebounced(e)}
          // onFocus={(e) => console.log('focused')}
          value={newRefinement}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <PoweredBy
          className="absolute right-0 top-1/2 -translate-y-1/2 scale-50 lg:scale-75 transform lg:px-3"
          translations={{
            searchBy: "Powered by",
          }}
        />
      </form>
    );
  }
);
