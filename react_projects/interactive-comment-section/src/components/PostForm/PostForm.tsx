import React, { FC, useContext, useEffect } from "react"
import CommentInput from "../CommentInput/CommentInput"
import styles from "./PostForm.module.scss"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { UserContext } from "../../context/UserContext"

export interface PostFormProps  {
    id?: number
    formId?: string

    buttonValue?: string
    buttonRef?: React.MutableRefObject<HTMLButtonElement>

    textAreaValue?: string
    textAreaRef?: React.MutableRefObject<HTMLTextAreaElement>

    onFormSubmit: Function
}

const PostForm: FC<PostFormProps> = ({
    id,
    formId,

    buttonValue,
    buttonRef,

    textAreaValue,
    textAreaRef,

    onFormSubmit,
}) => {
    useEffect(() => {
        textAreaRef?.current?.focus()
    }, [])

    const { avatarUrl } = useContext(UserContext)

    return (
        <form
            id={formId}
            className={styles["post-form"]}
            onSubmit={(e) => {
                onFormSubmit()
                e.preventDefault()
                e.stopPropagation()
            }}>
            <LazyLoadImage
                src={avatarUrl}
                alt="You"
                style={{ maxWidth: "3rem" }}
            />
            <CommentInput ref={textAreaRef}>{textAreaValue || ""}</CommentInput>
            <button
                ref={buttonRef}
                className="button button--default">
                {buttonValue}
            </button>
        </form>
    )
}

export default PostForm
