import React from "react"
import { useNavigate } from "react-router"
import strToUrl from "../../../helpers/functions/strToUrl"
import styles from "./BackCard.module.scss"

const BackCard = ({ isBackCardActive }) => {
    const navigate = useNavigate()

    return (
        <div
            className={`${styles["back-card"]} ${
                isBackCardActive ? styles["back-card--active"] : ""
            }`}
            onClick={() => navigate(`/${strToUrl(country.toLowerCase())}`)}>
            <span className={styles["back-card__text"]}>Check&nbsp;</span>
            <span className={styles["back-card__text"]}>more</span>
        </div>
    )
}

export default BackCard
