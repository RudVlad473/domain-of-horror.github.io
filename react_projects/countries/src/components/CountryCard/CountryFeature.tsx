import React, { FC } from "react"
import styles from "./CountryCard.module.scss"
import capitalizeFirstLetter from "../../helpers/functions/capitalizeFirstLetter"

const CountryFeature = ({ feature, ...props }: { feature: string }) => {
    return (
        <div>
            <span className={styles.attribute}>
                {capitalizeFirstLetter(feature)}:
            </span>
            <span> {props.children || "None"}</span>
        </div>
    )
}

export default CountryFeature
