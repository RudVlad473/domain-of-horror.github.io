import React from "react"
import DropDown from "./UI/DropDown/DropDown"
import { Dropdown } from "react-bootstrap"

const SortDropDown = ({
    sortCountries,
    fields,
}: {
    sortCountries: Function
    fields: string[]
}) => {
    return (
        <DropDown purpose="Sort by Feature">
            {Array.from(new Set(fields)).map((field: string) => (
                <Dropdown.Item
                    key={field}
                    value={field}
                    onClick={() => {
                        console.log(field)
                        sortCountries(field)
                    }}>
                    {field}
                </Dropdown.Item>
            ))}
        </DropDown>
    )
}

export default SortDropDown
