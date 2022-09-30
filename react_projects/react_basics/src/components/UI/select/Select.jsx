import React from "react"

const Select = ({ options, defaultSelected, value, onChange }) => {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option disabled>{defaultSelected}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    )
}

export default Select
