import React, { FC } from "react"
import styles from "./CountryCard.module.scss"
import capitalizeFirstLetter from "../../helpers/functions/capitalizeFirstLetter"

const CountryFeature = ({ feature, ...props }: { feature: string }) => {
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
