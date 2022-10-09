import React, { memo } from "react"
import Select from "./UI/Select/Select"

const SortSelect = memo(
    ({
        setFieldToSortBy,
        fields,
    }: {
        setFieldToSortBy: Function
        fields: string[]
    }) => {
        return (
            <Select
                purpose="Sort By Feature"
                onChange={(e) => {
                    setFieldToSortBy(e.target.value)
                }}>
                {fields.map((field: string) => (
                    <option
                        key={field}
                        value={field}>
                        {field}
                    </option>
                ))}
            </Select>
        )
    }
)

export default SortSelect
