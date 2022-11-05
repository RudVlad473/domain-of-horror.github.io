import React, { FC, useEffect } from "react"
import CommentInput from "../CommentInput/CommentInput"
import ContainedImage from "../ContainedImage/ContainedImage"
import Button from "../UI/Button/Button"
import styles from "./PostForm.module.scss"
import { Action } from "../../models/ActionTypes"

export interface PostFormProps extends Action {
    id?: number
    formId?: string
    avatarUrl: string
    buttonValue?: string
    buttonRef?: any
    textAreaValue?: string
    textAreaRef?: any
}

const PostForm: FC<PostFormProps> = ({
    id,
    formId,
    avatarUrl,
    buttonValue,
    buttonRef,
    textAreaValue,
    textAreaRef,
    action,
}) => {
    useEffect(() => {
        textAreaRef?.current.focus()
    }, [])

    return (
        <form
            id={formId}
            className={styles["post-form"]}
            onSubmit={(e) => {
                e.preventDefault()
                e.stopPropagation()
                action!(id)
            }}>
            <ContainedImage
                src={avatarUrl}
                alt={"You"}
                maxWidth={"2.5rem"}
            />
            <CommentInput ref={textAreaRef}>{textAreaValue || ""}</CommentInput>
            <Button
                ref={buttonRef}
                type="submit">
                {buttonValue}
            </Button>
        </form>
    )
}

export default PostForm
