import axios from "axios"
import React, { Suspense, useEffect, useState } from "react"

import ICountryCard from "../../components/CountryCard/ICountryCard"
import IFilter from "../../components/Filter/IFilter"
import Header from "../../components/Header"
import { CountriesContext } from "../../context"
import { allCountriesUrl } from "../../helpers/constants/links"

const CountriesGrid = React.lazy(
    () => import("../../components/CountriesGrid/CountriesGrid")
)
// import CountriesGrid from "./components/CountriesGrid/CountriesGrid"
// import Filters from "./components/Filters"
const Filters = React.lazy(() => import("../../components/Filter/Filters"))

const Countries = () => {
    const [countries, setCountries] = useState<ICountryCard[]>([])

    const [filter, setFilter] = useState<IFilter>({
        searchQuery: "",
        fieldName: "",
    })
    const [fieldToSortBy, setFieldToSortBy] = useState<string>("")

    useEffect(() => {
        ;(async () => {
            if (countries.length === 0) {
                const { data } = await axios.get<ICountryCard[]>(
                    allCountriesUrl
                )
                setCountries(() => data)
            }
        })()
    }, [])

    return (
        <>
            <Header />
            <CountriesContext.Provider value={{ countries, setCountries }}>
                <Suspense>
                    <Filters
                        setFilter={setFilter}
                        setFieldToSortBy={setFieldToSortBy}
                    />
                </Suspense>
                <Suspense>
                    <CountriesGrid
                        filter={filter}
                        fieldToSortBy={fieldToSortBy}
                    />
                </Suspense>
            </CountriesContext.Provider>
        </>
    )
}

export default Countries
