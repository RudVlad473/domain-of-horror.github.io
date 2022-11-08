import React, { FC, LegacyRef, useContext, useEffect } from "react"
import CommentInput from "../CommentInput/CommentInput"
import styles from "./PostForm.module.scss"
import Action from "../../models/ActionTypes"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { UserContext } from "../../context/UserContext"

export interface PostFormProps extends Action {
    id?: number
    formId?: string
    buttonValue?: string
    buttonRef?: LegacyRef<HTMLButtonElement> | undefined
    textAreaValue?: string
    textAreaRef?: LegacyRef<HTMLTextAreaElement> | undefined
}

const PostForm: FC<PostFormProps> = ({
    id,
    formId,
    buttonValue,
    buttonRef,
    textAreaValue,
    textAreaRef,
}) => {
    useEffect(() => {
        textAreaRef?.current?.focus({ cursor: "end" })
    }, [])

    const { avatarUrl } = useContext(UserContext)

    return (
        <form
            id={formId}
            className={styles["post-form"]}
            onSubmit={(e) => {
                e.preventDefault()
                e.stopPropagation()
                //action!(id)
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
                SEND
            </button>
        </form>
    )
}

export default PostForm
