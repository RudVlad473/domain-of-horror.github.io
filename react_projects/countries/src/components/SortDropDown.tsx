import React, { memo } from "react"
import { Form } from "react-bootstrap"
import Select from "./UI/Select/Select"

const SortDropDown = memo(
    ({
        setFieldToSortBy,
        fields,
    }: {
        setFieldToSortBy: Function
        fields: string[]
    }) => {
        return (
            <Select purpose="Sort By Feature">
                {fields.map((field: string) => (
                    <option
                        key={field}
                        value={field}
                        onClick={() => {
                            setFieldToSortBy(field)
                        }}>
                        {field}
                    </option>
                ))}
            </Select>

            // <DropDown purpose="Sort by Feature">
            //     {fields.map((field: string) => (
            //         <Dropdown.Item
            //             key={field}
            //             value={field}
            //             onClick={() => {
            //                 setFieldToSortBy(field)
            //             }}>
            //             {field}
            //         </Dropdown.Item>
            //     ))}
            // </DropDown>
        )
    }
)

export default SortDropDown
