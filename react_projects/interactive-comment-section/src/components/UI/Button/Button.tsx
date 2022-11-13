import React, { forwardRef } from "react"

export interface ButtonProps {
    buttonRef?: React.MutableRefObject<HTMLButtonElement>
    buttonValue: string
    props?: React.HTMLProps<HTMLButtonElement>
}

const Button = forwardRef(
    ({ buttonValue, buttonRef, ...props }: ButtonProps) => {
        return (
            <button
                ref={buttonRef}
                className="button button--default"
                {...props}>
                {buttonValue}
            </button>
        )
    }
)

export default Button
