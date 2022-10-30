import React, { FC } from "react"
import separateNumber from "../../../helpers/functions/separateNumber"
import CountryCard from "../../CountryCard/CountryCard"
import CookedCountriesProps from "./CookedCountriesProps"

const CookedCountries: FC<CookedCountriesProps> = ({
    cookedCountries,
    cardObserver,
}) => {
    return (
        <>
            {cookedCountries.map(
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
                        cardObserver={cardObserver.current}
                    />
                )
            )}
        </>
    )
}

export default CookedCountries
