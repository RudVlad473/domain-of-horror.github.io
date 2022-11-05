import React, { FC } from "react"
import styles from "./Button.module.scss"

interface ButtonProps {
    ref?: any
    id?: string
    type?: "button" | "submit" | "reset" | undefined
    children?: React.ReactNode
}

const Button: FC<ButtonProps> = React.forwardRef(
    ({ ref, id, type, ...props }) => {
        return (
            <button
                {...{ ref, id, type }}
                className={styles["button"]}>
                {props.children}
            </button>
        )
    }
)

export default Button
