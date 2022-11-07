import React, { FC } from "react"

import CommentBody, { CommentBodyProps } from "../CommentBody/CommentBody"
const LikeSection = React.lazy(() => import("../LikeSection/LikeSection"))
import styles from "../Comment/Comment.module.scss"
import { CommentContext } from "../../context/CommentContext"
import { LikeSectionProps } from "../LikeSection/LikeSection"

export interface CommentContentProps {
    id: number
    likesCount: LikeSectionProps
    commentBodyInfo: CommentBodyProps
}

const CommentContent: FC<CommentContentProps> = ({
    id,
    likesCount,
    commentBodyInfo,
}) => {
    return (
        <div
            id={`${id}`}
            data-name={commentBodyInfo.headerInfo.userDetails.userInfo.userName}
            className={styles["comment"]}
            onClick={(e) => console.log(e.currentTarget)}>
            <React.Suspense>
                <LikeSection {...likesCount} />
            </React.Suspense>

            <CommentBody {...commentBodyInfo} />
        </div>
    )
}

export default CommentContent
