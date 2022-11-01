import React, { FC } from "react"
import styles from "./CommentArea.module.scss"

interface CommentAreaProps {
    formId?: string
    name?: string
    children?: React.ReactNode
}

const CommentArea: FC<CommentAreaProps> = ({ formId, name }) => {
    return (
        <textarea
            className={styles["comment-area"]}
            placeholder={"Add a comment..."}
            form={formId}
            name={name}></textarea>
    )
}

export default CommentArea
