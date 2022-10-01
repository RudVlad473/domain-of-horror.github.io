import React from "react"
import { Container } from "react-bootstrap"
import CountryCard from "../CountryCard/CountryCard"
import styles from "./CountriesGrid.module.scss"
import ICountryCard from "../CountryCard/ICountryCard"

const CountriesGrid = ({ countries }) => {
    return (
        <Container
            fluid
            className={`px-3 px-md-5 py-3 ${styles["countries-grid"]}`}>
            {countries.map(({ name, population, capital, region, flag }) => (
                <CountryCard
                    name={name}
                    population={population}
                    region={region}
                    capital={capital}
                    // flagUrl={flag}
                    flagUrl={flag.replace(
                        /flagcdn.com\/(\w+).svg/,
                        "flagcdn.com/w320/$1.jpg"
                    )}
                />
            ))}
            {/* {countriesPromise.then((countires) => {
                countires.map((country) => <CountryCard {...country} />)
            })} */}
            {/* <CountryCard
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
            /> */}
        </Container>
    )
}

export default CountriesGrid
