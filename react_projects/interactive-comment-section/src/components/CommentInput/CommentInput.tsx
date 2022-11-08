import React, { FC, LegacyRef, useEffect } from "react"
import styles from "./CommentInput.module.scss"

interface CommentInputProps {
    ref?: LegacyRef<HTMLTextAreaElement> | undefined
    formId?: string
    name?: string
    children?: React.ReactNode
    isEditable?: boolean
}

const CommentInput: FC<CommentInputProps> = React.forwardRef(
    ({ formId, name, isEditable = true, ref, ...props }) => {
        useEffect(() => {
            ref?.current?.scrollIntoView()
        }, [])

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
