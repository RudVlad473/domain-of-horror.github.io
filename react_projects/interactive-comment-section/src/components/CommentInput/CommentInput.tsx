import React, { forwardRef, useEffect } from "react"
import styles from "./CommentInput.module.scss"

interface CommentInputProps {
    textAreaRef?: React.MutableRefObject<HTMLTextAreaElement>
    formId?: string
    name?: string
    children?: React.ReactNode
    isEditable?: boolean
}

const CommentInput = forwardRef(
    ({
        formId,
        name,
        isEditable = true,
        textAreaRef,
        ...props
    }: CommentInputProps) => {
        useEffect(() => {
            textAreaRef?.current?.scrollIntoView({
                block: "center",
                inline: "center",
            })
        }, [])

        return (
            <textarea
                ref={textAreaRef}
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
