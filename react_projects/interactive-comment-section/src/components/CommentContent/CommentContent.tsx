import React, { FC } from "react"
import { ICommentContent } from "../Comment/Comment"
import CommentBody from "../CommentBody/CommentBody"
const LikeSection = React.lazy(() => import("../LikeSection/LikeSection"))
import styles from "../Comment/Comment.module.scss"

const CommentContent: FC<ICommentContent> = ({
    id,
    likesCount,
    commentBodyInfo,
}) => {
    return (
        <div
            id={id}
            className={styles["comment"]}>
            <React.Suspense>
                <LikeSection {...likesCount} />
            </React.Suspense>

            <CommentBody {...commentBodyInfo} />
        </div>
    )
}

export default CommentContent
