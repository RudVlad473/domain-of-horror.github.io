import React, { Suspense, useEffect, useMemo, useState } from "react"
import { useParams } from "react-router"
import { Link, useSearchParams } from "react-router-dom"
import Loading from "../../components/UI/Loading/Loading"
import RectButton from "../../components/UI/RectButton/RectButton"

const Details = React.lazy(() => import("./Details/Details"))

const CountryDetails = () => {
    const params = useParams()

    return (
        <main className="d-flex flex-column mx-3 mx-md-5 py-5 gap-5">
            <Link
                to="/"
                style={{ maxWidth: "fit-content" }}>
                <RectButton>Back</RectButton>
            </Link>

            <Suspense fallback={<Loading />}>
                <Details params={params} />
            </Suspense>
        </main>
    )
}

export default CountryDetails
