import React, { memo, useContext, useMemo } from "react"
import SearchBar from "../SearchBar/SearchBar"
import { Container } from "react-bootstrap"
import RegionsSelect from "../RegionsDropDown"
import SortSelect from "../SortDropDown"
import uniquify from "../../helpers/functions/uniquify"
import capitalizeFirstLetter from "../../helpers/functions/capitalizeFirstLetter"
import ICountryCard from "../CountryCard/ICountryCard"
import { CountriesContext } from "../../context"

const Filters = ({
    setFilter,
    setFieldToSortBy,
}: {
    setFilter: Function
    setFieldToSortBy: Function
}) => {
    const { countries }: { countries: ICountryCard[] } =
        useContext(CountriesContext)!
    const regions = useMemo(() => {
        return uniquify(countries.map((country) => country["region"]))
    }, [countries])
    const fields = useMemo(() => {
        return uniquify(
            Object.keys(countries[0] || [])
                ?.filter((key) => !key.match(/flag|indep/i))
                .map((key: string) => capitalizeFirstLetter(key))
        )
    }, [countries])

    return (
        <Container
            fluid
            className="px-3 px-md-5 py-5 w-100 
            d-flex justify-content-center 
            justify-content-md-between  
            align-items-center gap-4 flex-wrap flex-sm-nowrap">
            <SearchBar setFilter={setFilter} />
            <SortSelect
                setFieldToSortBy={setFieldToSortBy}
                fields={fields}
            />
            <RegionsSelect
                setFilter={setFilter}
                regions={regions}
            />
        </Container>
    )
}

export default Filters
