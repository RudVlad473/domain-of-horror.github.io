import React from "react"
import SearchBar from "./SearchBar/SearchBar"
import { Container } from "react-bootstrap"
import RegionsDropDown from "./RegionsDropDown"

const Filters = () => {
    return (
        <Container
            fluid
            className="px-3 px-md-5 py-5 w-100 d-flex flex-wrap justify-content-start justify-content-md-between  align-items-center gap-4">
            <SearchBar />
            <RegionsDropDown />
        </Container>
    )
}

export default Filters
