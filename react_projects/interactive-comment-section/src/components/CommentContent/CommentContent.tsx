import React, { FC, useCallback } from "react"
import { ActionTypes } from "../../models/ActionTypes"
import CommentBody, { CommentBodyProps } from "../CommentBody/CommentBody"
const LikeSection = React.lazy(() => import("../LikeSection/LikeSection"))
//import styles from "../Comment/Comment.module.scss"
import { LikeSectionProps } from "../LikeSection/LikeSection"
import { PostReplyProps } from "../PostReply/PostReply"
import { ReplyProps } from "../Reply/Reply"

export interface CommentContentProps {
    id: number
    likesCount: LikeSectionProps
    commentBodyInfo: CommentBodyProps
    setLocalReplies: React.Dispatch<
        React.SetStateAction<ReplyProps[] | undefined>
    >
    setPostReply: React.Dispatch<React.SetStateAction<string | null>>
}

const CommentContent: FC<CommentContentProps> = ({
    id,
    likesCount,
    commentBodyInfo,
    setLocalReplies,
    setPostReply,
}) => {
    function handleActions(e: React.MouseEvent<HTMLDivElement>) {
        const actionType = (e.target as HTMLDivElement).dataset["type"]
        const replyingTo = e.currentTarget.dataset["name"]
        console.log(actionType, replyingTo)
        switch (actionType) {
            case ActionTypes.REPLY: {
                try {
                    setPostReply(
                        (currentPostReply) => replyingTo as string | null
                    )
                } catch (_) {
                    console.error(
                        "e.currentTarget.dataset['name'] IS UNDEFINED"
                    )
                }
                break
            }
            case ActionTypes.EDIT: {
                
            }
        }
    }

    return (
        <div
            id={`${id}`}
            data-name={commentBodyInfo.headerInfo.userDetails.userInfo.userName}
            className="comment"
            onClick={handleActions}>
            <React.Suspense>
                <LikeSection {...likesCount} />
            </React.Suspense>

            <CommentBody {...commentBodyInfo} />
        </div>
    )
}

export default CommentContent
