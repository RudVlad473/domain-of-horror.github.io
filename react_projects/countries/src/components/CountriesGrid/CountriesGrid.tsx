import React from "react"
import { Container } from "react-bootstrap"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import CountryCard from "../CountryCard/CountryCard"
import styles from "./CountriesGrid.module.scss"
import ICountryCard from "../CountryCard/ICountryCard"

const CountriesGrid = ({ countriesPromise }: ICountryCard[]) => {

    return (
        <Container
            fluid
            className={`px-3 px-md-5 py-3 ${styles["countries-grid"]}`}>
            {/* {countriesPromise.then((countires) => {
                countires.map((country) => <CountryCard {...country} />)
            })} */}
            <CountryCard
                country="Germany"
                population={81770900}
                region="Europe"
                capital="Berlin"
                flagUrl="https://flagcdn.com/de.svg"
            />
            <CountryCard
                country="Germany"
                population={81770900}
                region="Europe"
                capital="Berlin"
                flagUrl="https://flagcdn.com/de.svg"
            />
            <CountryCard
                country="Germany"
                population={81770900}
                region="Europe"
                capital="Berlin"
                flagUrl="https://flagcdn.com/de.svg"
            />
            <CountryCard
                country="Germany"
                population={81770900}
                region="Europe"
                capital="Berlin"
                flagUrl="https://flagcdn.com/de.svg"
            />
            <CountryCard
                country="Germany"
                population={81770900}
                region="Europe"
                capital="Berlin"
                flagUrl="https://flagcdn.com/de.svg"
            />
            <CountryCard
                country="Germany"
                population={81770900}
                region="Europe"
                capital="Berlin"
                flagUrl="https://flagcdn.com/de.svg"
            />
            <CountryCard
                country="Germany"
                population={81770900}
                region="Europe"
                capital="Berlin"
                flagUrl="https://flagcdn.com/de.svg"
            />
            <CountryCard
                country="Germany"
                population={81770900}
                region="Europe"
                capital="Berlin"
                flagUrl="https://flagcdn.com/de.svg"
            />
            <CountryCard
                country="Germany"
                population={81770900}
                region="Europe"
                capital="Berlin"
                flagUrl="https://flagcdn.com/de.svg"
            />
            <CountryCard
                country="Germany"
                population={81770900}
                region="Europe"
                capital="Berlin"
                flagUrl="https://flagcdn.com/de.svg"
            />
        </Container>
    )
}

export default CountriesGrid
