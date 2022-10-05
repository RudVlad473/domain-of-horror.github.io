import React, { Suspense, useEffect, useMemo, useState } from "react"

import Loading from "./components/UI/Loading/Loading"
const CountriesGrid = React.lazy(
    () => import("./components/CountriesGrid/CountriesGrid")
)
import Header from "./components/Header"
// import Filters from "./components/Filters"
const Filters = React.lazy(() => import("./components/Filters"))
import axios from "axios"

// import useCookedCountries from "./hooks/useCookedCountries"

const App = () => {
    console.log("rerender")
    const [countries, setCountries] = useState([])

    const [filter, setFilter] = useState({ searchQuery: "", fieldName: "" })
    const [fieldToSortBy, setFieldToSortBy] = useState("")

    const [isDataLoading, setIsDataLoading] = useState(true)

    async function fetchCountries() {
        const requestUrl =
            "https://restcountries.com/v2/all?fields=name,capital,region,population,flag"
        const { data } = await axios.get(requestUrl)

        setCountries(data)
        setIsDataLoading(false)
    }

    useEffect(() => {
        fetchCountries()
    }, [])

    return (
        <>
            <Header />

            <Suspense>
                <Filters
                    countries={countries}
                    setFilter={setFilter}
                    setFieldToSortBy={setFieldToSortBy}
                />
            </Suspense>

            {isDataLoading ? (
                <Loading />
            ) : (
                <Suspense fallback={<Loading />}>
                    <CountriesGrid
                        countries={countries}
                        filter={filter}
                        fieldToSortBy={fieldToSortBy}
                    />
                </Suspense>
            )}
        </>
    )
}

export default App
