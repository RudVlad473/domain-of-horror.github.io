import React, { Suspense, useEffect, useState } from "react"

import Loading from "./components/UI/Loading/Loading"
// const Header = React.lazy(() => import("./components/Header"))
// const Filters = React.lazy(() => import("./components/Filters"))
const CountriesGrid = React.lazy(
    () => import("./components/CountriesGrid/CountriesGrid")
)
import Header from "./components/Header"
import Filters from "./components/Filters"
// import CountriesGrid from "./components/CountriesGrid/CountriesGrid"

import axios from "axios"
import capitalizeFirstLetter from "./helpers/capitalizeFirstLetter"

const App = () => {
    const [countries, setCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])
    const [regions, setRegions] = useState([])
    const [fields, setFields] = useState([])
    const [isDataLoading, setIsDataLoading] = useState(true)

    const filterCountries = (query: string, field: string) => {
        query = query.toLowerCase()
        field = field.toLowerCase()
        setFilteredCountries(
            [...countries].filter(
                (country) => country[field]?.toLowerCase().includes(query)
                // Object.values(country).filter((field) =>
                //     String(field).toLowerCase().includes(query)
                // ).length > 0
            )
        )
    }

    const sortCountries = (fieldName: string) => {
        fieldName = fieldName.toLowerCase()
        if (fieldName.includes("population")) {
            setFilteredCountries(
                [...countries].sort((a, b) => b[fieldName] - a[fieldName])
            )
        } else {
            setFilteredCountries(
                [...countries].sort((a, b) =>
                    a[fieldName]?.localeCompare(b[fieldName])
                )
            )
        }
        // switch (fieldName) {
        //     case "population": {
        //         setFilteredCountries(
        //             [...countries].sort((a, b) => +a[fieldName] < +b[fieldName])
        //         )
        //         break
        //     }
        //     default: {
        //         setFilteredCountries(
        //             [...countries].sort((a, b) =>
        //                 a[fieldName]?.localeCompare(b[fieldName])
        //             )
        //         )
        //         break
        //     }
        // }
    }

    useEffect(() => {
        fetchCountries()
    }, [])

    async function fetchCountries() {
        const requestUrl =
            "https://restcountries.com/v2/all?fields=name,capital,region,population,flag"

        const { data } = await axios.get(requestUrl)

        setCountries(data)
        setFilteredCountries(data)

        setRegions(data.map((country) => country["region"]))
        setFields(
            Object.keys(data[0]).map((key: string) =>
                capitalizeFirstLetter(key)
            )
        )
        setIsDataLoading(false)
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
                <Suspense fallback={<Loading />}>
                    <CountriesGrid countries={filteredCountries} />
                </Suspense>
            )}
        </>
    )
}

export default App
