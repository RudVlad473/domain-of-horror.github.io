import React, { FC, FormEvent } from "react"
import Button, { ButtonProps } from "../UI/Button/Button"
import styles from "./Modal.module.scss"

export interface ModalProps {
    onSubmit: Function
    onSubmitButton: ButtonProps

    onDecline: Function
    onDeclineButton: ButtonProps

    header: string
    descr: string
}

const Modal: FC<ModalProps> = ({
    onSubmit,
    onSubmitButton,
    onDecline,
    onDeclineButton,
    header,
    descr,
}) => {
    function handleSubmit(e: FormEvent) {
        console.log(e.target)
    }

    function onFormSubmit() {}

    function onFormDecline() {}

    return (
        <div className={styles["background"]}>
           <form
            className={styles["modal"]}
            onSubmit={handleSubmit}>
            <header>{header}</header>
            <article>{descr}</article>
            <Button
                {...onSubmitButton}
                buttonValue={onSubmitButton.buttonValue}
            />
            <Button
                {...onDeclineButton}
                buttonValue={onDeclineButton.buttonValue}
            />
        </form> 
        </div>
        
    )
}

export default Modal
