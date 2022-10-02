import React from "react"
import { Dropdown } from "react-bootstrap"

const DropDown = ({
    purpose,
    ...props
}: {
    purpose: string
    props: React.ReactNode
}) => {
    return (
        <Dropdown className="me-0 ">
            <Dropdown.Toggle
                className="d-flex align-items-center 
                justify-content-between gap-2 
                bg-white border-0 text-dark 
                shadow-sm px-4 py-3"
                id="dropdown-basic">
                {purpose}
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100">
                {props.children}
                {/* {Array.from(new Set(regions)).map((region: string) => (
                    <Dropdown.Item
                        key={region}
                        value={region}
                        onClick={() => filterCountries(region)}>
                        {region}
                    </Dropdown.Item>
                ))} */}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropDown
