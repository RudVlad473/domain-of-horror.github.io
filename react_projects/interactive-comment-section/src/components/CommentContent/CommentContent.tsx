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
        <CommentContext.Provider
            value={{
                id,
                userName:
                    commentBodyInfo.headerInfo.userDetails.userInfo.userName,
            }}>
            <div
                id={`${id}`}
                className={styles["comment"]}>
                <React.Suspense>
                    <LikeSection {...likesCount} />
                </React.Suspense>

                <CommentBody {...commentBodyInfo} />
            </div>
        </CommentContext.Provider>
    )
}

export default CommentContent
