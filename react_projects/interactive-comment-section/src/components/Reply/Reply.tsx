import React, { FC } from "react"
import { ICommentContent } from "../Comment/Comment"
import PostReply, { ReplyFormProps } from "../PostReply/PostReply"
import CommentContent from "../CommentContent/CommentContent"

export interface ReplyProps extends ICommentContent, ReplyFormProps {}

const Reply: FC<ReplyProps> = (props) => {
    return (
        <>
            {props.commentBodyInfo ? (
                <CommentContent {...props} />
            ) : (
                <PostReply
                    key={props.id}
                    replyingTo={props.replyingTo}
                />
            )}
        </>
    )
}

export default Reply
