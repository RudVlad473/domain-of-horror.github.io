import React from "react"
import { Container } from "react-bootstrap"
import CountryCard from "../CountryCard/CountryCard"
import styles from "./CountriesGrid.module.scss"
import ICountryCard from "../CountryCard/ICountryCard"
import separateNumber from "../../helpers/separateNumber"

const CountriesGrid = ({ countries }) => {
    return (
        <Container
            fluid
            className={`px-3 px-md-5 py-3 ${styles["countries-grid"]}`}>
            {countries.map(({ name, population, capital, region, flag }) => (
                <CountryCard
                    key={name}
                    name={name}
                    population={separateNumber(population)}
                    region={region}
                    capital={capital}
                    // flagUrl={flag}
                    flagUrl={flag.replace(
                        /flagcdn.com\/(\w+).svg/,
                        "flagcdn.com/w320/$1.jpg"
                    )}
                />
            ))}
        </Container>
    )
}

export default CountriesGrid
