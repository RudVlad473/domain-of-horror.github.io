import { useMemo } from "react"
import isObjectEmpty from "../helpers/isObjectEmpty"
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
    }, [fieldName, filter])
    return cookedCountries
}

export default useCookedCountries
