import React from 'react';
import logo from './logo.svg';
import './App.css';
import WorkshopComponent from "./WorkshopComponent/WorkshopComponent"
import HookExample from "./HookExample/HookExample";
import FragmentsExample from "./FragmentsExample/FragmentsExample";
import ContextExample from "./ContextExample/ContextExample";
import Country from "./Country/Country";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";

function App() {

    const client = new ApolloClient({
        uri: "http://countries.trevorblades.com/"
    });

    return (

        <div className="App">

            <ApolloProvider client={client}>

                <WorkshopComponent message="passed property"/>
                <HookExample/>
                <FragmentsExample/>
                <ContextExample/>

                <div className="countriesWrapper">
                    <Country code="ME"/>
                    <Country code="RS"/>
                    <Country code="BA"/>
                    <Country code="HR"/>
                </div>

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" n/>
                    <p>Edit <code>src/App.js</code> and test to reload.</p>
                    <a className="App-link" href="https://reactjs.org" target="_blank"
                       rel="noopener noreferrer">Learn React
                    </a>
                </header>

            </ApolloProvider>

        </div>
    );
}

export default App;
