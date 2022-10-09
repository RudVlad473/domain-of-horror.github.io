import axios from "axios"
import React, { Suspense, useEffect, useMemo, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import Loading from "../../components/UI/Loading/Loading"
import RectButton from "../../components/UI/RectButton/RectButton"
import constructCountryDetailsUrl from "../../helpers/functions/constructCountryDetailsUrl"
import getNthWord from "../../helpers/functions/getNthWord"
import cookCountryDetails from "./CookCountries/cookCountryDetails"
import ICookedDetails from "./CookCountries/ICookedCountries"
import ICountryDetails from "./ICountryDetails"
const Details = React.lazy(() => import("./Details/Details"))

const CountryDetails = () => {
    const params = useParams()

    const [cookedCountryDetails, setCookedCountryDetails] =
        useState<ICookedDetails>()
    const isLoading = useMemo(() => {
        return cookedCountryDetails === undefined
    }, [cookedCountryDetails])

    useEffect(() => {
        fetchDetails()
    }, [])

    async function fetchDetails(): Promise<void> {
        const url = constructCountryDetailsUrl(
            getNthWord(params["name"] as string)
        )

        const { data: details } = await axios.get<ICountryDetails[]>(url)

        let currentDetails: ICountryDetails | undefined

        // if (details.length > 1) {

        // } else {
        //     currentDetails = details[0]
        // }
        //TODO: Реализовать случай, когда приходит несколько стран

        currentDetails = details[0]
        setCookedCountryDetails(cookCountryDetails(currentDetails))
    }

    return (
        <main className="d-flex flex-column mx-3 mx-md-5 py-5 gap-5">
            <Link to="/">
                <RectButton>Back</RectButton>
            </Link>

            {isLoading ? (
                <Loading />
            ) : (
                <Suspense fallback={<Loading />}>
                    <Details cookedDetails={cookedCountryDetails} />
                </Suspense>
            )}
        </main>
    )
}

export default CountryDetails
