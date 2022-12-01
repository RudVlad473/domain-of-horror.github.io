import axios from "axios"
import React, { FC, Suspense, useEffect, useMemo, useState } from "react"
import { Params, useNavigate } from "react-router"

import CountryFeature from "../../../components/CountryCard/CountryFeature/CountryFeature"
import Loading from "../../../components/UI/Loading/Loading"
import camelCaseToNormal from "../../../helpers/functions/camelCaseToNormal"
import constructCountryDetailsUrl from "../../../helpers/functions/constructCountryDetailsUrl"
import getNthWord from "../../../helpers/functions/getNthWord"
import strToUrl from "../../../helpers/functions/strToUrl"
import cookCountryDetails from "../CookCountries/cookCountryDetails"
import ICookedDetails from "../CookCountries/ICookedCountries"
import styles from "../CountryDetails.module.scss"
import ICountryDetails from "../ICountryDetails"
import LoadingBorder from "./LoadingBorder"

// import BorderCountry from "./BorderCountry"
const BorderCountry = React.lazy(() => import("./BorderCountry"))

const Details: FC<Readonly<Params<string>>> = ({ params }) => {
    const { name } = params

    const [cookedCountryDetails, setCookedCountryDetails] =
        useState<ICookedDetails>()

    const isLoading = useMemo(() => {
        return cookedCountryDetails === undefined
    }, [cookedCountryDetails])

    const navigate = useNavigate()

    useEffect(() => {
        fetchDetails()
        // return () => {
        //     console.log(1)
        //     clearTimeout(timeout.current)
        // }
    }, [params])

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!cookedCountryDetails) {
                alert(
                    "Oops! It seems like there aren't any details for that country"
                )
                navigate("/")
            }
        }, 3000)

        return () => clearTimeout(timeout)
    })

    async function fetchDetails(): Promise<void> {
        const url = constructCountryDetailsUrl(getNthWord(name as string))

        const { data: details } = await axios.get<ICountryDetails[]>(url)

        let currentDetails: ICountryDetails | undefined

        currentDetails =
            details.length > 1
                ? details.find(
                      (detail) => strToUrl(detail.name.toLowerCase()) === name
                  )
                : details[0]
        setCookedCountryDetails(cookCountryDetails(currentDetails!))
    }

    return isLoading ? (
        <Loading />
    ) : (
        <div
            className={`d-flex flex-column flex-sm-row align-items-center ${styles["details"]}`}>
            <div className={styles["details__header"]}>
                <img
                    src={cookedCountryDetails?.flag}
                    alt="Country flag"
                    className={`shadow-lg ${styles["details__header__img"]}`}
                />
            </div>
            <div
                className={`d-flex flex-column justify-content-between ${styles["details__body"]}`}>
                <header className={styles["details__body__header"]}>
                    {cookedCountryDetails?.name}
                </header>
                <article className={`${styles["details__body__content"]}`}>
                    {Object.keys(cookedCountryDetails as Object)
                        .filter((i) => !i.match(/(flag)|(name)|(borders)/i))
                        .sort((a, b) => {
                            return (
                                cookedCountryDetails[b]?.length + b.length <
                                cookedCountryDetails[a]?.length + a.length
                            )
                        })
                        .map((prop: string) => (
                            <CountryFeature
                                key={prop}
                                feature={camelCaseToNormal(prop)}>
                                {cookedCountryDetails[prop]}
                            </CountryFeature>
                        ))}
                </article>
                <footer
                    className={`d-flex flex-wrap align-items-center gap-2
                    ${styles["details__footer"]}`}>
                    <span className={`${styles["details__footer__title"]}`}>
                        Border Countries:&nbsp;
                    </span>
                    {cookedCountryDetails.borders?.map((border) => (
                        <Suspense fallback={<LoadingBorder />}>
                            <BorderCountry key={border} countryCode={border} />
                        </Suspense>
                    )) || "None"}
                </footer>
            </div>
        </div>
    )
}

export default Details
