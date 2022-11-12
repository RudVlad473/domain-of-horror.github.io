import React, { FC, forwardRef, useContext, useEffect } from "react"

import styles from "./PostForm.module.scss"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { UserContext } from "../../context/UserContext"
import CommentInput from "../CommentInput/CommentInput"
import Button from "../UI/Button/Button"

export interface PostFormProps {
    id?: number
    formId?: string

    buttonValue: string
    buttonRef?: React.MutableRefObject<HTMLButtonElement>

    textAreaValue?: string
    textAreaRef?: React.MutableRefObject<HTMLTextAreaElement>

    onFormSubmit: Function
}

const PostForm = forwardRef(
    ({
        id,
        formId,

        buttonValue,
        buttonRef,

        textAreaValue,
        textAreaRef,

        onFormSubmit,
    }: PostFormProps) => {
        useEffect(() => {
            textAreaRef?.current?.focus()
        }, [])

        const { avatarUrl } = useContext(UserContext)

        return (
            <form
                id={formId}
                className={styles["post-form"]}
                onSubmit={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    onFormSubmit()
                }}>
                <LazyLoadImage
                    src={avatarUrl}
                    alt="You"
                    style={{ maxWidth: "3rem" }}
                />
                <CommentInput
                    textAreaRef={
                        textAreaRef as React.MutableRefObject<HTMLTextAreaElement>
                    }>
                    {textAreaValue || ""}
                </CommentInput>
                <Button
                    buttonRef={
                        buttonRef as React.MutableRefObject<HTMLButtonElement>
                    }
                    buttonValue={buttonValue}
                />
            </form>
        )
    }
)

export default PostForm
