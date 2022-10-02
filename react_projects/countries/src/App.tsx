import React, { useEffect, useState } from "react"
import CountriesGrid from "./components/CountriesGrid/CountriesGrid"
import Filters from "./components/Filters"
import Header from "./components/Header"
import axios from "axios"
import capitalizeFirstLetter from "./helpers/capitalizeFirstLetter"
import Loading from "./components/UI/Loading/Loading"

const App = () => {
    const [countries, setCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])
    const [regions, setRegions] = useState([])
    const [fields, setFields] = useState([])
    const [isDataLoading, setIsDataLoading] = useState(true)

    const filterCountries = (query: string) => {
        query = query.toLowerCase()
        setFilteredCountries(
            [...countries].filter(
                (country) =>
                    Object.values(country).filter((field) =>
                        String(field).toLowerCase().includes(query)
                    ).length > 0
            )
        )
    }

    const sortCountries = (fieldName: string) => {
        fieldName = fieldName.toLowerCase()
        switch (fieldName) {
            case "population": {
                setFilteredCountries(
                    [...countries].sort((a, b) => a[fieldName] < b[fieldName])
                )
                break
            }
            default: {
                setFilteredCountries(
                    [...countries].sort((a, b) =>
                        a[fieldName]?.localeCompare(b[fieldName])
                    )
                )
                break
            }
        }
    }

    useEffect(() => {
        fetchCountries()
    }, [])

    async function fetchCountries() {
        const requestUrl =
            "https://restcountries.com/v2/all?fields=name,capital,region,population,flag"

        const { data } = await axios.get(requestUrl)
        setIsDataLoading(false)

        setCountries(data)
        setFilteredCountries(data)
        setRegions(data.map((country) => country["region"]))
        setFields(
            Object.keys(data[0]).map((key: string) =>
                capitalizeFirstLetter(key)
            )
        )
    }

    return (
        <>
            <Header />
            <Filters
                filterCountries={filterCountries}
                regions={regions}
                sortCountries={sortCountries}
                fields={fields}
            />
            {isDataLoading ? (
                <Loading />
            ) : (
                <CountriesGrid countries={filteredCountries} />
            )}
        </>
    )
}

export default App
