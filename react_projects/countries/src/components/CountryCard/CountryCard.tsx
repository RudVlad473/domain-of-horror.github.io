import React, { FC, memo, useEffect, useRef, useState } from "react"
import ICountryCard from "./ICountryCard"
import { Card } from "react-bootstrap"
import styles from "./CountryCard.module.scss"
import CountryFeature from "./CountryFeature"
import { LazyLoadImage } from "react-lazy-load-image-component"
import strToUrl from "../../helpers/functions/strToUrl"
// import BackCard from "./BackCard/BackCard"
import { useNavigate } from "react-router"

const CountryCard: FC<ICountryCard> = memo(
    ({
        name: country,
        population,
        region,
        capital,
        flagUrl,
        cardObserver,
        ...props
    }) => {
        
        const cardRef = useRef(null)

        // const [isBackCardActive, setIsBackCardActive] = useState(false)

        useEffect(() => {
            cardObserver.observe(cardRef.current)
        }, [])

        const navigate = useNavigate()

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
                    onClick={() =>
                        navigate(`/${strToUrl(country.toLowerCase())}`)
                    }
                    // onMouseEnter={() => {
                    //     if (!isBackCardActive) {
                    //         setIsBackCardActive(true)
                    //     }
                    // }}
                    // onMouseLeave={() => {
                    //     if (isBackCardActive) {
                    //         setIsBackCardActive(false)
                    //     }
                    // }}
                />
                <Card.Body className={`pb-4`}>
                    <Card.Title className={`pt-2 ${styles.header}`}>
                        {country}
                    </Card.Title>
                    <Card.Text className="pb-2">
                        <CountryFeature feature={"Population"}>
                            {population}
                        </CountryFeature>
                        <CountryFeature feature={"Region"}>
                            {region}
                        </CountryFeature>
                        <CountryFeature feature={"Capital"}>
                            {capital}
                        </CountryFeature>
                    </Card.Text>
                </Card.Body>
                {/* <BackCard isBackCardActive={isBackCardActive} /> */}
            </Card>
        )
    }
)

export default CountryCard
