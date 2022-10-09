import React, { FC, useEffect, useRef } from "react"
import ICountryCard from "./ICountryCard"
import { Card } from "react-bootstrap"
import styles from "./CountryCard.module.scss"
import CountryFeature from "./CountryFeature"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { useNavigate } from "react-router"
import strToUrl from "../../helpers/functions/strToUrl"

const CountryCard: FC<ICountryCard> = ({
    name: country,
    population,
    region,
    capital,
    flagUrl,
    cardObserver,
    ...props
}) => {
    const cardRef = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        cardObserver.observe(cardRef.current)
    }, [])

    return (
        <Card
            ref={cardRef}
            style={{ maxWidth: "18rem", marginInline: "auto" }}
            className={`shadow hover-card ${styles.card}`}
            {...props}>
            <LazyLoadImage
                alt="Country flag"
                src={flagUrl}
                style={{
                    aspectRatio: "16 / 10",
                    width: 251.51,
                }}
                className={styles["img"]}
                onClick={() => navigate(`/${strToUrl(country.toLowerCase())}`)}
            />

            <Card.Body className={`pb-4 ${styles["card-article"]}`}>
                <Card.Title className={`pt-2 ${styles.header}`}>
                    {country}
                </Card.Title>
                <Card.Text className="pb-2">
                    <CountryFeature feature={"Population"}>
                        {population}
                    </CountryFeature>
                    <CountryFeature feature={"Region"}>{region}</CountryFeature>
                    <CountryFeature feature={"Capital"}>
                        {capital}
                    </CountryFeature>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CountryCard
