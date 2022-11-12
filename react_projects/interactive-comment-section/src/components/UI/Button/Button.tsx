import React, { forwardRef } from "react"

interface ButtonProps {
    buttonRef?: React.MutableRefObject<HTMLButtonElement>
    buttonValue: string
}

const Button = forwardRef(({ buttonValue, buttonRef }: ButtonProps) => {
    return (
        <button
            ref={buttonRef}
            className="button button--default">
            {buttonValue}
        </button>
    )
})

export default Button
