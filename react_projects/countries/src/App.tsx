import React, { Suspense, useEffect, useMemo, useState } from "react"

// const CountriesGrid = React.lazy(
//     () => import("./components/CountriesGrid/CountriesGrid")
// )
import CountriesGrid from "./components/CountriesGrid/CountriesGrid"
import Header from "./components/Header"
// import Filters from "./components/Filters"
const Filters = React.lazy(() => import("./components/Filters"))
import axios from "axios"

const App = () => {
    const [countries, setCountries] = useState([])
    // const countries = useMemo(async () => {
    //     return await fetchCountries()
    // }, [])

    const [filter, setFilter] = useState({ searchQuery: "", fieldName: "" })
    const [fieldToSortBy, setFieldToSortBy] = useState("")

    async function fetchCountries() {
        const requestUrl =
            "https://restcountries.com/v2/all?fields=name,capital,region,population,flag"
        const { data } = await axios.get(requestUrl)

        setCountries(data)
        // return data
    }

    useEffect(() => {
        fetchCountries()
    }, [])

    console.table("rerender", "countries.length", countries.length)

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

            <CountriesGrid
                countries={countries}
                filter={filter}
                fieldToSortBy={fieldToSortBy}
            />
        </>
    )
}

export default App
