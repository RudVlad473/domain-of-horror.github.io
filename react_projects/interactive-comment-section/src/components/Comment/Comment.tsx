import React, { FC } from "react"
import CommentBody, { CommentBodyProps } from "../CommentBody/CommentBody"
import LikeSection from "../LikeSection/LikeSection"

import styles from "./Comment.module.scss"

export interface CommentProps {
    id: string
    likesCount: number
    commentBodyInfo: CommentBodyProps
    levelOfIndent?: number
}

const Comment: FC<CommentProps> = ({
    id,
    likesCount,
    commentBodyInfo,
    levelOfIndent,
}) => {
    return (
        <div
            id={id}
            className={styles["comment"]}>
            <LikeSection {...{ likesCount }} />
            <CommentBody {...commentBodyInfo} />
        </div>
    )
}

export default Comment
