import React from "react"
import ICountryCard from "./ICountryCard"
import { Card } from "react-bootstrap"
import styles from "./CountryCard.module.scss"

const CountryCard = ({
    name: country,
    population,
    region,
    capital,
    flagUrl: flagUrl,
}: ICountryCard) => {
    return (
        <Card style={{ maxWidth: "18rem" }}>
            <Card.Img variant="top" src={flagUrl} loading="lazy" />
            <Card.Body className={`pb-4 ${styles["card-article"]}`}>
                <Card.Title className={`pt-2 ${styles.attribute}`}>
                    {country}
                </Card.Title>
                <Card.Text className="pb-2">
                    <div>
                        <span className={styles.attribute}>
                            Population:&nbsp;
                        </span>
                        <span>{population}</span>
                    </div>
                    <div>
                        <span className={styles.attribute}>Region:&nbsp;</span>
                        <span>{region}</span>
                    </div>
                    <div>
                        <span className={styles.attribute}>Capital:&nbsp;</span>
                        <span>{capital}</span>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CountryCard
