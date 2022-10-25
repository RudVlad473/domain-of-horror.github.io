import React, { useState } from "react"
import AppRouter from "./components/AppRouter"
import Header from "./components/Header"
const CountryDetails = React.lazy(
    () => import("./pages/CountryDetails/CountryDetails")
)

const App = () => {
    return (
        <>
            <Header />
            <AppRouter />
        </>
    )
}

export default App
