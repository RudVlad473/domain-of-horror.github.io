import React, { FC } from "react"
import Comment, { CommentProps } from "../Comment/Comment"
import NoComments from "../NoComments/NoComments"

interface CommentsProps {
    comments: CommentProps[] | undefined
}

const Comments: FC<CommentsProps> = ({ comments }) => {
    return (
        <>
            {comments?.map((comment) => (
                <Comment
                    key={comment.id}
                    {...comment}
                />
            )) || <NoComments />}
        </>
    )
}

export default Comments
