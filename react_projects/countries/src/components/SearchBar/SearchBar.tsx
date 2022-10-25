import React, { memo, Suspense } from "react"
import styles from "./SearchBar.module.scss"
// import { DebounceInput } from "react-debounce-input"
const DebounceInput = React.lazy(() => import("react-debounce-input"))
// import { DebounceInput } from "react-debounce-input"

const SearchBar = memo(({  setFilter }: { setFilter: Function }) => {
    return (
        <div
            className={`input-group 
            light-background 
            shadow-sm w-25 ms-0 d-flex 
            align-items-center 
            rounded ${styles["search-bar"]}`}>
            <div className="input-group-prepend">
                <span
                    className="input-group-text p-2 m-0 bg-white border-0"
                    id="basic-addon1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-search">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </span>
            </div>
            <Suspense>
                <DebounceInput
                    minLength={1}
                    debounceTimeout={300}
                    onChange={(e) =>
                        setFilter({
                            fieldName: "name",
                            searchQuery: e.target.value,
                        })
                    }
                    type="text"
                    className="form-control border-0 py-2"
                    placeholder="Search for a country..."
                    aria-describedby="basic-addon1"
                />
            </Suspense>

            {/* <input
                type="text"
                className="form-control border-0 py-2"
                placeholder="Search for a country..."
                aria-describedby="basic-addon1"
                onChange={(e) => filterCountries(e.target.value, "name")}
            /> */}
        </div>
    )
})

export default SearchBar
