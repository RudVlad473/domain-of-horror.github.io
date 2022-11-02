import React, { FC } from "react"
import Comment, { CommentProps } from "../Comment/Comment"

interface RepliesProps {
    replies?: CommentProps[] | undefined
}

const Replies: FC<RepliesProps> = ({ replies }) => {
    

    return (
        <>
            {replies &&
                (replies.length > 0 ? replies : undefined)?.map((reply) => (
                    <Comment
                        key={reply.id}
                        {...reply}
                    />
                ))}
        </>
    )
}

export default Replies
