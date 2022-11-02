import React, { FC, useEffect, useState } from "react"
import Comment, { CommentProps } from "../Comment/Comment"

interface RepliesProps {
    replies?: Promise<CommentProps[] | undefined>
}

const Replies: FC<RepliesProps> = ({ replies }) => {
    const [awaitedReplies, setAwaitedReplies] = useState<
        CommentProps[] | undefined
    >([])

    useEffect(() => {
        replies?.then((data) => setAwaitedReplies(data))
    }, [])

    return (
        <>
            {awaitedReplies &&
                (awaitedReplies.length > 0 ? awaitedReplies : undefined)?.map(
                    (reply) => (
                        <Comment
                            key={reply.id}
                            {...reply}
                        />
                    )
                )}
        </>
    )
}

export default Replies
