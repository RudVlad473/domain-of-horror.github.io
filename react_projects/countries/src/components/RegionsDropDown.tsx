import React, { memo } from "react"
import Select from "./UI/Select/Select"

const RegionsSelect = memo(
    ({ setFilter, regions }: { setFilter: Function; regions: string[] }) => {
        return (
            <Select
                purpose="Filter by Region"
                onChange={(e) => {
                    setFilter({
                        searchQuery: e.target.value,
                        fieldName: "region",
                    })
                }}>
                {regions.map((region: string) => (
                    <option
                        key={region}
                        value={region}>
                        {region}
                    </option>
                ))}
            </Select>
        )
    }
)

export default RegionsSelect
