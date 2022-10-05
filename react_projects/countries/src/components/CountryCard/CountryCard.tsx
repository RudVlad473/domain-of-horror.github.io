import React, { useEffect, useRef } from "react"
import ICountryCard from "./ICountryCard"
import { Card } from "react-bootstrap"
import styles from "./CountryCard.module.scss"

const CountryCard = ({
    name: country,
    population,
    region,
    capital,
    flagUrl,
    cardObserver,
    ...props
}) => {
    const cardRef = useRef(null)

    useEffect(() => {
        cardObserver.observe(cardRef.current)
    }, [])

    return (
        <Card            
            ref={cardRef}
            style={{ maxWidth: "18rem", marginInline: "auto" }}
            className={`shadow hover-card ${styles.card}`}
            {...props}>
            <Card.Img
                style={{ aspectRatio: "16 / 10" }}
                variant="top"
                src={flagUrl}
                loading="lazy"
            />
            <Card.Body className={`pb-4 ${styles["card-article"]}`}>
                <Card.Title className={`pt-2 ${styles.header}`}>
                    {country}
                </Card.Title>
                <Card.Text className="pb-2">
                    <div>
                        <span className={styles.attribute}>
                            Population:&nbsp;
                        </span>
                        <span>{population || "None"}</span>
                    </div>
                    <div>
                        <span className={styles.attribute}>Region:&nbsp;</span>
                        <span>{region}</span>
                    </div>
                    <div>
                        <span className={styles.attribute}>Capital:&nbsp;</span>
                        <span>{capital || "None"}</span>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CountryCard
