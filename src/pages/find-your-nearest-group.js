import React from "react";
import MapSearch from "../components/MapSearch";
import Layout from "../components/Layout";
import Seo from "../utils/seo";
import { PageContext } from "../utils/context";

const SearchPage = ({ location }) => {
  const searchIndices = [{ name: `Groups`, title: `Groups` }];
  return (
    <PageContext.Provider
        value={{
        hasHero: false,
        currentPage: '',
        breadcrumb: '',
        location: location,
        background_color: "bg-white"
        }}
    >
        <Layout location={location}>
            <Seo title="Find your nearest group" description="Find your nearest Andy’s man club. We have over 100 free support groups nationwide, running every Monday from 7PM except bank holidays." />
            <MapSearch indices={searchIndices} location={location}/>
        </Layout>
    </PageContext.Provider>
  );
};

export default SearchPage;
