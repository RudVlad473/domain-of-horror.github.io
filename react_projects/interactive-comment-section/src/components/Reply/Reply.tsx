import React, { FC } from "react"
import CommentBody from "../CommentBody/CommentBody"
import { CommentContentProps } from "../CommentContent/CommentContent"
import LikeSection from "../LikeSection/LikeSection"
import addReplyingToArticle from "../../helpers/functions/addReplyingToArticle"

export interface ReplyProps extends CommentContentProps {
    replyingTo: string
}

const Reply: FC<ReplyProps> = ({
    id,
    likesCount,
    commentBodyInfo,
    replyingTo,
}) => {
    return (
        <div id={`${id}`} className="comment">
            <React.Suspense>
                <LikeSection {...likesCount} />
            </React.Suspense>

            <CommentBody
                {...addReplyingToArticle(replyingTo, commentBodyInfo)}
            />
        </div>
    )
}

export default Reply
