import React, { FC, Suspense, useEffect, useMemo, useState } from "react"
import CountryFeature from "../../../components/CountryCard/CountryFeature/CountryFeature"
import styles from "../CountryDetails.module.scss"
import { LazyLoadImage } from "react-lazy-load-image-component"
import ICookedDetails from "../CookCountries/ICookedCountries"
import camelCaseToNormal from "../../../helpers/functions/camelCaseToNormal"
// import BorderCountry from "./BorderCountry"
const BorderCountry = React.lazy(() => import("./BorderCountry"))
import constructCountryDetailsUrl from "../../../helpers/functions/constructCountryDetailsUrl"
import getNthWord from "../../../helpers/functions/getNthWord"
import axios from "axios"
import ICountryDetails, { ICountryParams } from "../ICountryDetails"
import cookCountryDetails from "../CookCountries/cookCountryDetails"
import Loading from "../../../components/UI/Loading/Loading"
import LoadingBorder from "./LoadingBorder"
import { Params } from "react-router"

const Details: FC = ({ params }) => {
    const { name } = params

    const [cookedCountryDetails, setCookedCountryDetails] =
        useState<ICookedDetails>()

    const isLoading = useMemo(() => {
        return cookedCountryDetails === undefined
    }, [cookedCountryDetails])

    useEffect(() => {
        fetchDetails()
    }, [params])

    async function fetchDetails(): Promise<void> {
        const url = constructCountryDetailsUrl(getNthWord(name as string))

        const { data: details } = await axios.get<ICountryDetails[]>(url)

        let currentDetails: ICountryDetails | undefined

        // if (details.length > 1) {

        // } else {
        //     currentDetails = details[0]
        // }
        //TODO: Реализовать случай, когда приходит несколько стран

        currentDetails = details[0]
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
                            <BorderCountry
                                key={border}
                                countryCode={border}
                            />
                        </Suspense>
                    )) || "None"}
                </footer>
            </div>
        </div>
    )
}

export default Details
