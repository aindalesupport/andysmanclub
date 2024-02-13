import React, { useState, useEffect } from 'react'
import Heading from 'src/components/Heading'
import { graphql, useStaticQuery } from 'gatsby';

// SQL query to grab posts and filter by groups
const GroupsFallback = ({ blok }) => {

    let data = useStaticQuery(graphql`
        {
        posts: allStoryblokEntry(
            filter: {
                field_component: {eq: "group"}
            }
            sort: {fields: name, order: ASC}
        ) {
            edges {
            node {
                uuid
                name
                full_slug
                content 
                field_component
                tag_list
            }
            }
        }
        cities: allStoryblokDatasourceEntry(
            filter: {data_source: {ne: "background-colors"}}
            sort: {fields: name, order: ASC}
        ) {
            edges {
                node {
                  name
                  data_source
                }
              }
            }
        }     
    `)
    
    // Define useStates
    const [groups] = useState(data.posts.edges.map(group => group.node));
    const [cities] = useState(data.cities.edges.map(city => city.node.name));
    const [selectedCity, setSelectedCity] = useState('');
    const [filteredGroups, setFilteredGroups] = useState(groups)

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    }

    useEffect(() => {
        setCurrentPage(1);
        if (selectedCity) {
            setFilteredGroups(
                groups.filter(group => {
                    let groupCities = JSON.parse(group.content).city.map(city => city.toLowerCase())
                    return groupCities.includes(selectedCity.toLowerCase())
                }
            ))
        } else {
            setFilteredGroups(groups)
        }
    }, [selectedCity, groups])

    const groupsPerPage = 15;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastGroup = currentPage * groupsPerPage;
    const indexOfFirstGroup = indexOfLastGroup - groupsPerPage;
    const currentGroups = filteredGroups.slice(indexOfFirstGroup, indexOfLastGroup);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredGroups.length / groupsPerPage); i++) {
        pageNumbers.push(i);
    }
    
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        
            <div className={`overflow-hidden py-20 bg-black px-6`}>
                <div className={`max-w-8xl mx-auto py-16`}>
                    <div className="md:items-end items-start justify-between gap-5">
                        <Heading size="h1" className={`mb-0 lg:!text-[110px] !text-6xl !leading-[0.8] !text-white`}>
                            FIND YOUR NEAREST GROUP. 
                        </Heading>
                        <p className="text-white">
                            Enter your town or city in the text box, then select it from the drop down options to find the nearest ANDYSMANCLUB groups to where you are and join us on Mondays at 7pm. If you can’t find a group near you and you want to join us online, please contact us.
                        </p>
                    </div>
                    <div className={`max-w-8xl mx-auto py-6`} >
                        <select onChange={handleCityChange}>
                            <option value="">Select a city</option>
                            {cities.map((city, index) => (
                                <option key={index} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div class="grid gap-4 grid-cols-1 md:grid-cols-3 grid-rows-5">
                        {currentGroups.map((group, index) => (
                            <div class="relative justify-between flex-col mb-5 pb-5 border-b border-gray-400">
                            <div class="flex justify-between mb-1">
                                <span class="uppercase text-darkgrey tracking-[0.06em] text-[11px]">
                                    {JSON.parse(group.content).county}
                                </span>
                            </div>
                                <h3 class="font-display uppercase text-3xl lg:text-4xl tracking-normal leading-[0.8] text-white duration-300 !mb-2 mb-3">
                                    {group.name} {group.content.coming_soon && ' - COMING SOON' } 
                                </h3>
                            <p class="text-darkgrey leading-[20px] text-[14px] mb-3">
                                {JSON.parse(group.content).address}
                            </p>
                            <p class="text-darkgrey leading-[20px] text-[14px] mb-3">
                                What3words: 
                                <a class="duration-300" href="https://what3words.com/carbon.scam.reason" target="_blank">
                                    {JSON.parse(group.content).what_3_words}
                                </a>                             
                            </p>
                            <div class="flex flex-row gap-x-2 items-center mb-3">
                                {!JSON.parse(group.content).not_accessible &&
                                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
                                        <path d="M7.3335 7.33325V13.9892H12.8761L15.0263 19.3333L17.3335 18.4477" stroke="white" stroke-width="2" stroke-miterlimit="10"></path>
                                        <path d="M11.3335 18.8779C10.7473 19.489 10.0432 19.9635 9.2679 20.2699C8.49259 20.5764 7.66369 20.7077 6.83603 20.6554C6.00837 20.603 5.20081 20.3681 4.46676 19.9662C3.73271 19.5642 3.0889 19.0045 2.57791 18.3239C2.06693 17.6433 1.70041 16.8574 1.50261 16.0181C1.3048 15.1789 1.28021 14.3055 1.43047 13.4556C1.58073 12.6057 1.90241 11.7988 2.37423 11.0881C2.84606 10.3775 3.45727 9.77933 4.16745 9.33325" stroke="white" stroke-width="2" stroke-miterlimit="10"></path>
                                        <path d="M7.3335 9.33325H12.6668" stroke="white" stroke-width="2" stroke-miterlimit="10"></path>
                                        <path d="M7.3335 5.33325C8.43806 5.33325 9.3335 4.43782 9.3335 3.33325C9.3335 2.22868 8.43806 1.33325 7.3335 1.33325C6.22893 1.33325 5.3335 2.22868 5.3335 3.33325C5.3335 4.43782 6.22893 5.33325 7.3335 5.33325Z" stroke="white" stroke-width="2" stroke-miterlimit="10"></path>
                                    </svg>
                                }
                                <a class="text-white hover:text-yellow duration-300" href={JSON.parse(group.content).facebook_url} target="_blank" rel="noreferrer">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path id="Facebook" fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47715 0 0 4.50452 0 10.0611C0 15.083 3.65686 19.2453 8.4375 20V12.9694H5.89844V10.0611H8.4375V7.84455C8.4375 5.32297 9.93043 3.93013 12.2146 3.93013C13.3087 3.93013 14.4531 4.12664 14.4531 4.12664V6.60263H13.1921C11.9499 6.60263 11.5625 7.37818 11.5625 8.17383V10.0611H14.3359L13.8926 12.9694H11.5625V20C16.3431 19.2453 20 15.083 20 10.0611C20 4.50452 15.5229 0 10 0Z" fill="currentColor"></path>
                                    </svg>
                                </a>
                            </div>
                            <a class="uppercase text-darkgrey tracking-[0.06em] text-[11px] hover:text-yellow duration-300" href={`https://maps.google.com/?q=${JSON.parse(group.content).lat},${JSON.parse(group.content).lng}`} target="_blank">
                                Directions
                            </a>
                        </div>                                                
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <ul className="flex gap-2">
                            {pageNumbers.map((number) => (
                                <li key={number}>
                                    <button

                                        onClick={() => handlePageChange(number)}
                                        className={`${
                                            currentPage === number ? "bg-yellow text-black" : "bg-black text-white"
                                        } px-3 py-2 rounded-md text-sm font-medium`}
                                    >
                                        {number}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>        
       
    )
}

export default GroupsFallback
