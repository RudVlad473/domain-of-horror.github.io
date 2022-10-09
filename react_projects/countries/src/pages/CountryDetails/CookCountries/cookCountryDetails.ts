import ICountryDetails from "../ICountryDetails"
import objectToString from "../../../helpers/functions/objectToString"
import ICookedDetails from "./ICookedCountries"
import separateNumber from "../../../helpers/functions/separateNumber"

function cookCountryDetails({
    name,
    topLevelDomain,
    capital,
    subregion,
    region,
    population,
    borders,
    nativeName,
    currencies,
    languages,
    flag,
}: ICountryDetails): Readonly<ICookedDetails> {
    return Object.freeze({
        name,
        topLevelDomain: objectToString(topLevelDomain),
        capital,
        subregion,
        region,
        population: separateNumber(population),
        borders,
        nativeName,
        currencies: currencies.map((currency) => currency.name).join(", "),
        languages: languages.map((language) => language.name).join(", "),
        flag,
    })
}

export default cookCountryDetails
