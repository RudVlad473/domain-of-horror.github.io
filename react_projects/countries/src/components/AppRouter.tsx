import React from "react"
import { Route, Routes } from "react-router"
import Countries from "../pages/Countries/Countries"
import CountryDetails from "../pages/CountryDetails/CountryDetails"
import NotFound from "../pages/NotFound/NotFound"

const AppRouter = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Countries />}
            />
            <Route
                path="/:name"
                element={<CountryDetails />}
            />
            <Route
                path="*"
                element={<NotFound />}
            />
        </Routes>
    )
}

export default AppRouter
