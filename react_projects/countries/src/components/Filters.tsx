import React from "react"
import SearchBar from "./SearchBar/SearchBar"
import { Container } from "react-bootstrap"
import RegionsDropDown from "./RegionsDropDown"
import SortDropDown from "./SortDropDown"

const Filters = ({ filterCountries, regions, sortCountries, fields }) => {
    return (
        <Container
            fluid
            className="px-3 px-md-5 py-5 w-100 d-flex flex-wrap justify-content-start justify-content-md-between  align-items-center gap-4">
            <SearchBar filterCountries={filterCountries} />
            <SortDropDown
                sortCountries={sortCountries}
                fields={fields}
            />
            <RegionsDropDown
                filterCountries={filterCountries}
                regions={regions}
            />
        </Container>
    )
}

export default Filters
