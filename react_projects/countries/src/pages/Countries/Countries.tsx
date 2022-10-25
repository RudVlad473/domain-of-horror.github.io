import React, { Suspense, useEffect, useMemo, useState } from "react"

const CountriesGrid = React.lazy(
    () => import("../../components/CountriesGrid/CountriesGrid")
)
// import CountriesGrid from "./components/CountriesGrid/CountriesGrid"
// import Filters from "./components/Filters"
const Filters = React.lazy(() => import("../../components/Filters"))
import axios from "axios"
import ICountryCard from "../../components/CountryCard/ICountryCard"
import { allCountriesUrl } from "../../helpers/constants/links"
import { CountriesContext } from "../../context"
import Header from "../../components/Header"

const Countries = () => {
    const [countries, setCountries] = useState<ICountryCard[]>([])

    const [filter, setFilter] = useState({
        searchQuery: "",
        fieldName: "",
    })
    const [fieldToSortBy, setFieldToSortBy] = useState<string>("")

    async function fetchCountries(): Promise<void> {
        const { data } = await axios.get<ICountryCard[]>(allCountriesUrl)

        setCountries((countries) => data)
        // return data
    }

    useEffect(() => {
        fetchCountries()
    }, [])

    return (
        <>
            <Header />
            <CountriesContext.Provider value={{ countries, setCountries }}>
                <Suspense>
                    <Filters
                        countries={countries}
                        setFilter={setFilter}
                        setFieldToSortBy={setFieldToSortBy}
                    />
                </Suspense>
                <Suspense>
                    <CountriesGrid
                        countries={countries}
                        filter={filter}
                        fieldToSortBy={fieldToSortBy}
                    />
                </Suspense>
            </CountriesContext.Provider>
        </>
    )
}

export default Countries
