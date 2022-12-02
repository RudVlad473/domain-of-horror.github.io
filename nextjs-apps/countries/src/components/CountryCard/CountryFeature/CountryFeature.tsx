import React, { FC } from "react"

import capitalizeFirstLetter from "../../../helpers/functions/capitalizeFirstLetter"
import styles from "../CountryCard.module.scss"
import ICountryFeature from "./ICountryFeature"

const CountryFeature: FC<ICountryFeature> = ({ feature, ...props }) => {
    return (
        <span style={{ display: "block" }}>
            <span className={styles.attribute}>
                {capitalizeFirstLetter(feature)}:
            </span>

            <span> {props.children || "None"}</span>
        </span>
    )
}

export default CountryFeature
