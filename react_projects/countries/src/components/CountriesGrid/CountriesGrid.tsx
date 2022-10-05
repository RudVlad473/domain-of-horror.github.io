import React, { memo, Suspense } from "react"
import { Container } from "react-bootstrap"
// import CountryCard from "../CountryCard/CountryCard"
const CountryCard = React.lazy(() => import("../CountryCard/CountryCard"))
// import ICountryCard from "../CountryCard/ICountryCard"
import separateNumber from "../../helpers/separateNumber"
import useCookedCountries from "../../hooks/useCookedCountries"
import cardStyles from "../CountryCard/CountryCard.module.scss"

const CountriesGrid = ({ countries, filter, fieldToSortBy }) => {
    const cardObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle(
                    cardStyles["active"],
                    entry.isIntersecting
                )
            })
        },
        {
            threshold: 0.5,
        }
    )

    const cookedCountries = useCookedCountries(countries, filter, fieldToSortBy)

    return (
        <Container
            fluid
            className="px-3 px-md-5 py-3 countries-grid">
            {cookedCountries.map(
                ({ name, population, capital, region, flag }) => (
                    <Suspense>
                        <CountryCard
                            key={name}
                            name={name}
                            population={separateNumber(population)}
                            region={region}
                            capital={capital}
                            flagUrl={flag.replace(
                                /flagcdn.com\/(\w+).svg/,
                                "flagcdn.com/w320/$1.jpg"
                            )}
                            cardObserver={cardObserver}
                        />
                    </Suspense>
                )
            )}
        </Container>
    )
}

export default CountriesGrid
