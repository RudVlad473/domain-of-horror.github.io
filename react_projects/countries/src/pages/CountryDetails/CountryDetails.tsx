import React, { Suspense, useState } from "react"
import { useParams } from "react-router"
import Header from "../../components/Header"
import Loading from "../../components/UI/Loading/Loading"
import RectButton from "../../components/UI/RectButton/RectButton"

const Details = React.lazy(() => import("./Details/Details"))

const CountryDetails = () => {
    const params = useParams()
    return (
        <>
            <Header />
            <main className={`d-flex flex-column mx-3 mx-md-5 py-5 gap-5`}>
                <RectButton>Back</RectButton>

                <Suspense fallback={<Loading />}>
                    <Details params={params} />
                </Suspense>
            </main>
        </>
    )
}

export default CountryDetails
