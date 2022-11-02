import React, { FC } from "react"
import styles from "./CommentInput.module.scss"

interface CommentInputProps {
    formId?: string
    name?: string
    children?: React.ReactNode
}

const CommentInput: FC<CommentInputProps> = ({ formId, name }, ref) => {
    return (
        <textarea
            ref={ref}
            className={styles["comment-area"]}
            placeholder={"Add a comment..."}
            form={formId}
            name={name}></textarea>
    )
}

const ForwardedCommentInput = React.forwardRef(CommentInput)

export default ForwardedCommentInput
