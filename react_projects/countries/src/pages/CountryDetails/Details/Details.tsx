import React from "react"
import CountryFeature from "../../../components/CountryCard/CountryFeature"
import styles from "../CountryDetails.module.scss"
import { LazyLoadImage } from "react-lazy-load-image-component"
import ICookedDetails from "../CookCountries/ICookedCountries"
import camelCaseToNormal from "../../../helpers/functions/camelCaseToNormal"
import BorderCountry from "./BorderCountry"

const Details = ({ cookedDetails }: { cookedDetails: ICookedDetails }) => {
    const { flag, name, borders, ...other } = cookedDetails

    return (
        <div
            className={`d-flex flex-column flex-sm-row align-items-center ${styles["details"]}`}>
            <div className={styles["details__header"]}>
                <LazyLoadImage
                    src={flag}
                    alt="Country flag"
                    className={`shadow-lg ${styles["details__header__img"]}`}
                />
            </div>
            <div
                className={`d-flex flex-column justify-content-between ${styles["details__body"]}`}>
                <header className={styles["details__body__header"]}>
                    {name}
                </header>
                <article className={`${styles["details__body__content"]}`}>
                    {Object.keys(other)
                        .sort()
                        .map((prop: string) => (
                            <CountryFeature
                                key={prop}
                                feature={camelCaseToNormal(prop)}>
                                {other[prop]}
                            </CountryFeature>
                        ))}
                </article>
                <footer
                    className={`d-flex flex-wrap align-items-center gap-2
                    ${styles["details__footer"]}`}>
                    <span className={`${styles["details__footer__title"]}`}>
                        Border Countries:&nbsp;
                    </span>
                    {borders?.map((border) => (
                        <BorderCountry
                            key={border}
                            countryCode={border}
                        />
                    )) || "None"}
                </footer>
            </div>
        </div>
    )
}

export default Details
