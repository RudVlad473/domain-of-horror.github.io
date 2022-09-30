import React from "react"
import CountriesGrid from "./components/CountriesGrid/CountriesGrid"
import Filters from "./components/Filters"
import Header from "./components/Header"
import ICountryCard from "./components/CountryCard/ICountryCard"
import getCountriesAsync, { requestUrl } from "./components/request/request"

const App = () => {
    const countriesPromise: ICountryCard[] = getCountriesAsync(requestUrl)

    return (
        <>
            <Header />
            <Filters />
            <CountriesGrid countriesPromise={ countriesPromise} />
        </>
    )
}

export default App
