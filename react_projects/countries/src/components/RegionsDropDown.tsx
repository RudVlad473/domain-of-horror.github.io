import React from "react"
import { Dropdown } from "react-bootstrap"

const RegionsDropDown = () => {
    return (
        <Dropdown className="me-0 ">
            <Dropdown.Toggle
                className="d-flex align-items-center justify-content-between gap-2 bg-white border-0 text-dark shadow-sm px-4 py-3"
                id="dropdown-basic">
                Filter by Region
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100">
                <Dropdown.Item href="#/action-1">Africa</Dropdown.Item>
                <Dropdown.Item href="#/action-2">America</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Asia</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Europe</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Oceania</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default RegionsDropDown
