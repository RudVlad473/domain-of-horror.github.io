import React, { FC, useEffect, useState } from "react"
import Comment, { CommentProps } from "../Comment/Comment"
import NoComments from "../NoComments/NoComments"
import Replies from "../Replies/Replies"

interface CommentsProps {
    comments: CommentProps[] | undefined
}

const Comments: FC<CommentsProps> = ({ comments }) => {
    // console.log(
    //     "replies within comments",
    //     ...comments.map((comment) => comment.replies)
    // )

    return (
        <>
            {comments?.map((comment) => (
                <>
                    <Comment
                        key={comment.id}
                        {...comment}
                    />
                    <Replies
                        key={Math.random()}
                        replies={comment?.replies}
                    />
                </>
            )) || <NoComments />}
        </>
    )
}

export default Comments
