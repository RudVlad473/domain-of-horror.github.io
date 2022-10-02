import React from "react"
import DropDown from "./UI/DropDown/DropDown"
import { Dropdown } from "react-bootstrap"

const RegionsDropDown = ({
    filterCountries,
    regions,
}: {
    filterCountries: Function
    regions: string[]
}) => {
    return (
        <DropDown purpose="Filter by Regions">
            {Array.from(new Set(regions)).map((region: string) => (
                <Dropdown.Item
                    key={region}
                    value={region}
                    onClick={() => filterCountries(region, "region")}>
                    {region}
                </Dropdown.Item>
            ))}
        </DropDown>
    )
}

export default RegionsDropDown
