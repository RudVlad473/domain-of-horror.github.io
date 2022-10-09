import React from "react"
import styles from "./RectButton.module.scss"

const RectButton = (props) => {
    return (
        <button
            className={`shadow-sm px-2 py-1 d-flex justify-content-center 
            align-items-center border-0 ${styles["rect-button"]}
            gap-2 fs-5`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 330.002 330.002"
                style={{
                    enableBackground: "new 0 0 330.002 330.002",
                }}
                xmlSpace="preserve">
                <path d="M229.966.847a15 15 0 0 0-16.678 4.784l-120 150.004a15 15 0 0 0 .001 18.741l120 149.996a15 15 0 0 0 26.713-9.371v-300A15 15 0 0 0 229.966.847zM210.001 272.24l-85.79-107.235 85.79-107.241V272.24z" />
            </svg>
            {props.children}
        </button>
    )
}

export default RectButton
