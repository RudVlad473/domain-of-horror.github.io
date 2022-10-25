import React from "react"
import { Route, Routes } from "react-router"
import Countries from "../pages/Countries/Countries"
import CountryDetails from "../pages/CountryDetails/CountryDetails"
import { routes } from "../router"
// import NotFound from "../pages/NotFound/NotFound"

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route) => (
                <Route
                    key={route.path}
                    element={<route.component />}
                    path={route.path}
                />
            ))}
        </Routes>
    )
}

export default AppRouter
