import React, { FC } from "react"
import styles from "./CommentInput.module.scss"

interface CommentInputProps {
    ref?: HTMLTextAreaElement
    formId?: string
    name?: string
    children?: React.ReactNode
    isEditable?: boolean
}

const CommentInput: FC<CommentInputProps> = React.forwardRef(
    ({ formId, name, isEditable = true, ...props }, ref) => {
        return (
            <textarea
                ref={ref}
                // disabled={!isEditable}
                className={`${styles["comment-area"]} ${
                    !isEditable && styles["comment-area--disabled"]
                }`}
                placeholder={"Add a comment..."}
                form={formId}
                name={name}
                spellCheck="false">
                {props.children}
            </textarea>
        )
    }
)

export default CommentInput
