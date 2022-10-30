import { useMemo } from "react"
import ICountryCard from "../components/CountryCard/ICountryCard"
import isObjectEmpty from "../helpers/functions/isObjectEmpty"
import useSortedCountries from "./useSortedCountries"

const useCookedCountries = (
    countries: any[],
    filter: Object,
    fieldName: string
) => {
    //sorts and filters
    const sortedCountries = useSortedCountries(countries, fieldName)

    const cookedCountries = useMemo(() => {
        return isObjectEmpty(filter)
            ? sortedCountries
            : sortedCountries?.filter((country) =>
                  country[filter.fieldName.toLowerCase()]
                      ?.toLowerCase()
                      .includes(filter.searchQuery.toLowerCase())
              )
    }, [countries, fieldName, filter])
    return cookedCountries
}

export default useCookedCountries
