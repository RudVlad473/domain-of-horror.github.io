import axios from "axios"
import React, { useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import constructCountryNameUrl from "../../../helpers/functions/constructCountryNameUrl"
import strToUrl from "../../../helpers/functions/strToUrl"
import styles from "../CountryDetails.module.scss"
import LoadingBorder from "./LoadingBorder"

const BorderCountry = ({ countryCode }: { countryCode: string }) => {
    const [countryName, setCountryName] = useState<string>("")
    const isLoading = useMemo(() => {
        return countryName === ""
    }, [countryName])
    const navigate = useNavigate()

    async function fetchCountryName() {
        const nameUrl = constructCountryNameUrl(countryCode)

        const { data } = await axios.get<Object>(nameUrl)

        setCountryName(data["name"])
    }

    useEffect(() => {
        fetchCountryName()
    }, [])

    return isLoading ? (
        <LoadingBorder />
    ) : (
        <span
            className={`shadow-sm ${styles["details__footer__item"]}`}
            onClick={() => {
                navigate(`/${strToUrl(countryName.toLowerCase())}`)
            }}>
            {countryName}
        </span>
    )
    // return (
    //     <span
    //         className={`shadow-sm ${styles["details__footer__item"]} ${
    //             isLoading ? styles["gradient"] : ""
    //         }`}
    //         onClick={() => {
    //             navigate(`/${strToUrl(countryName.toLowerCase())}`)
    //         }}>
    //         {countryName}
    //     </span>
    // )
}

export default BorderCountry
