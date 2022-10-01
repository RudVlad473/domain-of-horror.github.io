import React, { useEffect, useState } from "react"
import CountriesGrid from "./components/CountriesGrid/CountriesGrid"
import Filters from "./components/Filters"
import Header from "./components/Header"
import ICountryCard from "./components/CountryCard/ICountryCard"
import getCountriesAsync from "./components/request/request"
import axios from "axios"

const App = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetchCountries()
    }, [])

    async function fetchCountries() {
        const requestUrl =
            "https://restcountries.com/v2/all?fields=name,capital,region,population,flag"

        const { data } = await axios.get(requestUrl)

        setCountries(data)
    }

    return (
        <>
            <Header />
            <Filters />
            <CountriesGrid countries={countries} />
        </>
    )
}

export default App
