import React from "react";
import Search from "../components/Search";
import Layout from "../components/Layout";
import { PageContext } from "../utils/context";

const SearchPage = ({ location }) => {
  const searchIndices = [{ name: `Pages`, title: `Pages` }];
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
            <Search indices={searchIndices} location={location}/>
        </Layout>
    </PageContext.Provider>
  );
};

export default SearchPage;