import React, { FC } from "react"

import addReplyingToArticle from "../../helpers/functions/addReplyingToArticle"
import { ICommentContent } from "../../models/Comment/IComment"
import CommentBody from "../CommentBody/CommentBody"
import LikeSection from "../LikeSection/LikeSection"

export interface ReplyProps extends ICommentContent {
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
