import React, { useMemo } from "react"
import { Container } from "react-bootstrap"
import CountryCard from "../CountryCard/CountryCard"
// const CountryCard = React.lazy(() => import("../CountryCard/CountryCard"))
// import ICountryCard from "../CountryCard/ICountryCard"
import separateNumber from "../../helpers/functions/separateNumber"
import useCookedCountries from "../../hooks/useCookedCountries"
import cardStyles from "../CountryCard/CountryCard.module.scss"
import Loading from "../UI/Loading/Loading"

const CountriesGrid = ({
    countries,
    filter,
    fieldToSortBy,
}: {
    countries: ICountryCard[]
    setFilter: Function
    setFieldToSortBy: Function
}) => {
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

    const isDataLoading = useMemo(() => {
        return countries.length === 0
    }, [countries])

    const cookedCountries = useCookedCountries(countries, filter, fieldToSortBy)

    return isDataLoading ? (
        <Loading />
    ) : (
        <Container
            fluid
            className="px-3 px-md-5 py-3 countries-grid">
            {cookedCountries?.map(
                ({ name, population, capital, region, flag }) => (
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
                )
            )}
        </Container>
    )
}

export default CountriesGrid
