import React, { useState } from "react"
import { connectSearchBox } from "react-instantsearch-dom"

export default connectSearchBox(
    ({ refine, currentRefinement, className, onFocus }) => {
        const [color, setColor] = useState("lg:stroke-darkgrey stroke-[#BDBDBD]");

        const handleFocus = () => {
            setColor("stroke-yellow");
        }

        const handleBlur = () => {
            setColor("lg:stroke-darkgrey stroke-[#BDBDBD]");
        }
        
        let timerId = null
        const delay = 1000
  
        const [newRefinement, setNewRefinement] = useState(currentRefinement)
  
        const onChangeDebounced = (event) => {
          const value = event.currentTarget.value
      
          clearTimeout(timerId)
          timerId = setTimeout(() => refine(value), delay)
      
          setNewRefinement(value)
      
        }

        return(
            <form className={className} onSubmit={e => { e.preventDefault(); }}>
                <div className="absolute inset-y-0 left-0 px-6 flex items-center pointer-events-none -mt-1">
                    <svg className={color} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" id='search-icon'>
                        <path d="M7.25 12.75C10.5637 12.75 13.25 10.0637 13.25 6.75C13.25 3.43629 10.5637 0.75 7.25 0.75C3.93629 0.75 1.25 3.43629 1.25 6.75C1.25 10.0637 3.93629 12.75 7.25 12.75Z" stroke="current" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.7508 14.25L11.4883 10.9875" stroke="current" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <input
                className="block w-full mx-auto bg-white py-8 pr-8 pl-12 focus:text-black !border-0 focus:shadow-none focus:ring-0 focus:ring-transparent focus:outline-none text-[16px] md:text-[18px] text-darkgrey lg:placeholder:text-darkgrey placeholder:text-[#BDBDBD] tracking-tight"
                type="text"
                placeholder="Enter your town or city..."
                aria-label="Search"
                onChange={e => onChangeDebounced(e)}
                // onFocus={(e) => console.log('focused')}
                value={newRefinement}
                onFocus={handleFocus}
                onBlur={handleBlur}
                />
            </form>
        )
    }
)