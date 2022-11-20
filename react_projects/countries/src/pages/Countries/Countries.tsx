import React, { memo, Suspense, useEffect, useMemo, useState } from "react"

const CountriesGrid = React.lazy(
    () => import("../../components/CountriesGrid/CountriesGrid")
)
// import CountriesGrid from "./components/CountriesGrid/CountriesGrid"
// import Filters from "./components/Filters"
const Filters = React.lazy(() => import("../../components/Filter/Filters"))
import axios from "axios"
import ICountryCard from "../../components/CountryCard/ICountryCard"
import { allCountriesUrl } from "../../helpers/constants/links"
import { CountriesContext } from "../../context"
import Header from "../../components/Header"
import IFilter from "../../components/Filter/IFilter"

const Countries = () => {
    const [countries, setCountries] = useState<ICountryCard[]>([])

    const [filter, setFilter] = useState<IFilter>({
        searchQuery: "",
        fieldName: "",
    })
    const [fieldToSortBy, setFieldToSortBy] = useState<string>("")

   

    useEffect(() => {
        (async () => {
            if(countries.length === 0) {
                const {data} = await axios.get<ICountryCard[]>(allCountriesUrl)
                setCountries((countries) => data)
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
