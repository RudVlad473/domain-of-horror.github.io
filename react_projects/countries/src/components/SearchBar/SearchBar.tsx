import React from "react"
import styles from "./SearchBar.module.scss"

const SearchBar = () => {
    return (
        <div
            className={`input-group light-background shadow-sm w-25 ms-0 d-flex align-items-center px-2  rounded ${styles["search-bar"]}`}>
            <div className="input-group-prepend">
                <span
                    className="input-group-text p-0 m-0 bg-white border-0 "
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
            <input
                type="text"
                className="form-control border-0 py-2"
                placeholder="Search for a country..."
                aria-label="Username"
                aria-describedby="basic-addon1"
            />
        </div>
    )
}

export default SearchBar
