import React from "react";
import Layout from "../components/Layouts/layout";
import { useSearch } from "../context/search";

const Search = () => {
    const [values, setValues] = useSearch();

    return (
        <>
        <Layout title={"Search Results"}>
            <div className="container">
                <h1>Search Results</h1>
                <h6>{values?.results.length < 1 ? "No Results" : `Found ${values?.results.length}`}</h6>
            </div>
        </Layout>
        </>
    )
} 

export default Search;