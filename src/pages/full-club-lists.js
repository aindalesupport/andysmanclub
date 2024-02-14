import React from "react";
import Layout from "../components/Layout";
import Seo from "../utils/seo";
import { PageContext } from "../utils/context";
import GroupsFallback from "../components/GroupsFallback";

const SearchPage = ({ location }) => {
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
            <Seo title="Full club lists" description="Full club lists - Andy’s man club. We have over 100 free support groups nationwide, running every Monday from 7PM except bank holidays." />
            <GroupsFallback/>
        </Layout>
    </PageContext.Provider>
  );
};

export default SearchPage;