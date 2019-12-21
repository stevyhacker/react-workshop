import React from 'react';
import './Country.css'
import query from "./query";
import {useQuery} from "react-apollo";

const Country = (props) => {

    const code = props.code;

    const {loading, data, error} = useQuery(query, {
        variables: {
            countryCode: code
        }
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;

    const country = data.country;

    return (
        <div className="country">
            <h2 className="title">{country.name}</h2>
            <h1>{country.emoji}</h1>
            <h3>{country.native}</h3>
        </div>
    )
};

export default Country;