import React, {
    FC,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react"
import { Container } from "react-bootstrap"
import CountryCard from "../CountryCard/CountryCard"
import separateNumber from "../../helpers/functions/separateNumber"
import useCookedCountries from "../../hooks/useCookedCountries"
import Loading from "../UI/Loading/Loading"
import { CountriesContext } from "../../context"
//import LoadCountriesObserver from "./loadCountriesObserver"
import { cardAnimationObserver } from "./IntersectionObservers/cardAnimationObserver"
import ICountriesGridProps from "./ICountriesGrid"
import ICountryCard from "../CountryCard/ICountryCard"

const CookedCountries = React.lazy(
    () => import("./CookedCountries/CookedCountries")
)

const CountriesGrid: FC<ICountriesGridProps> = ({ filter, fieldToSortBy }) => {
    const { countries }: { countries: ICountryCard[] } =
        useContext(CountriesContext)!
    const cookedCountries = useCookedCountries(countries, filter, fieldToSortBy)

    const cardObserver = useRef<IntersectionObserver>()
    const loadCountriesObserver = useRef<IntersectionObserver>()
    const lastElemRef = useRef()!

    // const defaultLoadCount: number =
    //     (countries.length / 10) | 0 || countries.length
    const defaultLoadCount: number = 25

    const [loadCount, setLoadCount] = useState(defaultLoadCount)

    const isDataLoading = useMemo(() => {
        return countries.length === 0
    }, [countries])

    useEffect(() => {
        cardObserver.current = cardAnimationObserver
        loadCountriesObserver.current = new IntersectionObserver((entries) => {
            const lastElem = entries[0]
            if (lastElem!.isIntersecting && loadCount < countries.length) {
                setLoadCount((loadCount) => loadCount + defaultLoadCount)
            }
        })

        loadCountriesObserver.current.observe(lastElemRef.current!)
    }, [isDataLoading])

    return (
        <>
            {isDataLoading && <Loading />}

            <Container
                fluid
                className="px-3 px-md-5 py-3 countries-grid">
                <CookedCountries
                    cookedCountries={cookedCountries?.slice(0, loadCount)}
                    cardObserver={cardObserver}
                />

                <div
                    ref={lastElemRef!}
                    className="load-trigger"></div>
            </Container>
        </>
    )
}

export default CountriesGrid
