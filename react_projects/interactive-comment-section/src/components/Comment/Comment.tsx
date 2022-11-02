import React, { FC } from "react"
import CommentBody, { CommentBodyProps } from "../CommentBody/CommentBody"
import LikeSection, { LikeSectionProps } from "../LikeSection/LikeSection"

import styles from "./Comment.module.scss"

export interface CommentProps {
    id: string
    likesCount: LikeSectionProps
    commentBodyInfo: CommentBodyProps
    replies?: Promise<CommentProps[]>
}

const Comment: FC<CommentProps> = ({ id, likesCount, commentBodyInfo }) => {
    return (
        <div
            id={id}
            className={styles["comment"]}>
            <LikeSection {...likesCount} />
            <CommentBody {...commentBodyInfo} />
        </div>
    )
}

export default Comment
