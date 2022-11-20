import React, { FC, memo, useEffect, useRef } from "react"
import { Card } from "react-bootstrap"
import { LazyLoadImage } from "react-lazy-load-image-component"
import strToUrl from "../../helpers/functions/strToUrl"
import styles from "./CountryCard.module.scss"
import CountryFeature from "./CountryFeature/CountryFeature"
import {
    CountryCardProps
} from "./ICountryCard"
// import BackCard from "./BackCard/BackCard"
import { useNavigate } from "react-router"

//import { redirect } from "react-router-dom"

const CountryCard: FC<CountryCardProps> = memo(
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
            cardObserver?.observe(cardRef.current!)
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
                    onClick={() => {
                        navigate(`/${strToUrl(country.toLowerCase())}`)
                    }}
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
