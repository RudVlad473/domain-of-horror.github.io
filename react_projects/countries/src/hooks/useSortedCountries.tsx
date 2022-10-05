import { useMemo } from "react"

const useSortedCountries = (countries: any[], fieldName: string) => {
    console.time("sorting...")
    const sortedCountries = useMemo(() => {
        if (!fieldName) {
            return countries
        }

        const fieldToSortBy = fieldName.toLowerCase()
        
        switch (fieldToSortBy) {
            case "population": {
                return [...countries].sort(
                    (a, b) => b[fieldToSortBy] - a[fieldToSortBy]
                )
            }
            default: {
                return [...countries].sort((a, b) =>
                    a[fieldToSortBy]?.localeCompare(b[fieldToSortBy])
                )
            }
        }
    }, [fieldName])
    console.timeEnd("sorting...")
    return sortedCountries
}

export default useSortedCountries
