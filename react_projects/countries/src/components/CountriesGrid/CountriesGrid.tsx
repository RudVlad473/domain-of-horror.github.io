import React, { useContext, useEffect, useMemo, useRef, useState } from "react"
import { Container } from "react-bootstrap"
import CountryCard from "../CountryCard/CountryCard"
// const CountryCard = React.lazy(() => import("../CountryCard/CountryCard"))
// import ICountryCard from "../CountryCard/ICountryCard"
import separateNumber from "../../helpers/functions/separateNumber"
import useCookedCountries from "../../hooks/useCookedCountries"
import cardStyles from "../CountryCard/CountryCard.module.scss"
import Loading from "../UI/Loading/Loading"
import { CountriesContext } from "../../context"
import LoadCountriesObserver from "./loadCountriesObserver"
import { cardAnimationObserver } from "./IntersectionObservers/cardAnimationObserver"

const CountriesGrid = ({
    filter,
    fieldToSortBy,
}: {
    setFilter: Function
    setFieldToSortBy: Function
}) => {
    const { countries } = useContext(CountriesContext)
    const cookedCountries = useCookedCountries(countries, filter, fieldToSortBy)

    const cardObserver = useRef<IntersectionObserver>()
    const loadCountriesObserver = useRef<IntersectionObserver>()
    const lastElemRef = useRef()

    const defaultLoadCount: number =
        (countries.length / 10) | 0 || countries.length

    const [loadCount, setLoadCount] = useState(defaultLoadCount)

    const isDataLoading = useMemo(() => {
        return countries.length === 0
    }, [countries])

    useEffect(() => {
        cardObserver.current = cardAnimationObserver
        loadCountriesObserver.current = new IntersectionObserver((entries) => {
            const lastElem = entries[0]

            if (lastElem.isIntersecting && loadCount < countries.length) {
                console.log("would load", loadCount, defaultLoadCount)
                setLoadCount((loadCount) => loadCount + defaultLoadCount)
            }
        })

        loadCountriesObserver.current.observe(lastElemRef.current)
    }, [isDataLoading])

    //console.log("grid rerender", isDataLoading)

    return (
        <>
            {isDataLoading && <Loading />}

            <Container
                fluid
                className="px-3 px-md-5 py-3 countries-grid">
                {cookedCountries
                    .slice(0, loadCount)
                    .map(({ name, population, capital, region, flag }) => (
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
                            cardObserver={cardObserver.current}
                        />
                    ))}
                <div
                    ref={lastElemRef}
                    className="load-trigger"></div>
            </Container>
        </>
    )
}

export default CountriesGrid
