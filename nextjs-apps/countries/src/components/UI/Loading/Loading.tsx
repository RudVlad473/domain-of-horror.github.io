import React from "react"
import styles from "./Loading.module.scss"

const Loading = () => {
    const svgSize = "200px"

    return (
        <svg
            width={svgSize}
            height={svgSize}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles["loading"]}>
            <rect
                width="48"
                height="48"
                fill="white"
                fillOpacity="0.01"
            />
            <path
                d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles["loading__outer-circle"]}
            />
            <path
                d="M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles["loading__inner-circle"]}
            />
        </svg>
    )
}

export default Loading
