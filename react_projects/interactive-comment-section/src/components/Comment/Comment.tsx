import React, { FC, useCallback, useContext, useEffect, useState } from "react"
import { CommentDetailsContext } from "../../context/CommentDetailsContext"
import { CommentsContext } from "../../context/CommentsContext"
import CommentBody, { CommentBodyProps } from "../CommentBody/CommentBody"
import CommentContent from "../CommentContent/CommentContent"
import { LikeSectionProps } from "../LikeSection/LikeSection"
import NoComments from "../NoComments/NoComments"
import { ReplyProps } from "../Reply/Reply"

const LikeSection = React.lazy(() => import("../LikeSection/LikeSection"))
const Replies = React.lazy(() => import("../Replies/Replies"))
import styles from "./Comment.module.scss"

export interface ICommentContent {
    id: string
    likesCount: LikeSectionProps
    commentBodyInfo: CommentBodyProps
}

export interface CommentProps extends ICommentContent {
    replies?: Promise<ReplyProps[] | undefined> | undefined
}

const Comment: FC<CommentProps> = ({
    id,
    likesCount,
    commentBodyInfo,
    replies,
}) => {
    const [localReplies, setLocalReplies] = useState<ReplyProps[] | undefined>(
        []
    )

    useEffect(() => {
        ;(async () => {
            const awaitedReplies = await replies

            setLocalReplies((_) => awaitedReplies)
        })()
    }, [])

    return (
        <CommentDetailsContext.Provider
            value={{
                id: +id,
                userName:
                    commentBodyInfo.headerInfo.userDetails.userInfo.userName,
                setLocalReplies,
            }}>
            <CommentContent
                id={id}
                likesCount={likesCount}
                commentBodyInfo={commentBodyInfo}
            />
            <React.Suspense fallback={<NoComments />}>
                <Replies replies={localReplies} />
            </React.Suspense>
        </CommentDetailsContext.Provider>
    )
}

export default Comment
