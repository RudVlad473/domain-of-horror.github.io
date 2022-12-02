import React from "react"

import styles from "../CountryDetails.module.scss"

const LoadingBorder = () => {
    return (
        <span
            className={`shadow-sm ${styles["details__footer__item"]} 
            ${styles["gradient"]}`}>
            Lorem ipsum
        </span>
    )
}

export default LoadingBorder
