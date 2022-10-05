import React, { memo } from "react"
import { Form } from "react-bootstrap"
import Select from "./UI/Select/Select"

const RegionsDropDown = memo(
    ({ setFilter, regions }: { setFilter: Function; regions: string[] }) => {
        return (
            <Select purpose="Filter by Region">
                {regions.map((region: string) => (
                    <option
                        key={region}
                        value={region}
                        onClick={() => {
                            setFilter({
                                searchQuery: region,
                                fieldName: "region",
                            })
                        }}>
                        {region}
                    </option>
                ))}
            </Select>

            // <DropDown purpose="Filter by Regions">
            //     {regions.map((region: string) => (
            //         <Dropdown.Item
            //             key={region}
            //             value={region}
            //             onClick={() => {
            //                 setFilter({
            //                     searchQuery: region,
            //                     fieldName: "region",
            //                 })
            //             }}>
            //             {region}
            //         </Dropdown.Item>
            //     ))}
            // </DropDown>
        )
    }
)

export default RegionsDropDown
