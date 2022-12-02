import React, { FC, useEffect, useState } from "react"

import { ICommentContent } from "../../models/Comment/IComment"
import CommentContent from "../CommentContent/CommentContent"
import NoComments from "../NoComments/NoComments"
import PostReply from "../PostReply/PostReply"
import repliesStyles from "../Replies/Replies.module.scss"
import { ReplyProps } from "../Reply/Reply"

//const Replies = React.lazy(() => import("../Replies/Replies"))

export interface CommentProps extends ICommentContent {
    replies: Promise<ReplyProps[] | undefined>
}

const Comment: FC<CommentProps> = (comment) => {
    const [localReplies, setLocalReplies] = useState<ReplyProps[] | undefined>(
        []
    )
    const [postReply, setPostReply] = useState<string | null>(null)

    useEffect(() => {
        ;(async () => {
            const awaitedReplies = await comment.replies
            setLocalReplies(() => awaitedReplies)
        })()
    }, [comment.replies])

    return (
        <>
            <CommentContent
                comment={comment}
                setLocalReplies={setLocalReplies}
                setPostReply={setPostReply}
            />
            <React.Suspense fallback={<NoComments />}>
                {localReplies?.length ? (
                    <section
                        className={repliesStyles["replies-section"]}
                        aria-label="replies">
                        <div
                            className={
                                repliesStyles["replies-section__left-separator"]
                            }></div>

                        <div className={repliesStyles["replies"]}>
                            {localReplies?.map((reply) => (
                                <CommentContent
                                    key={reply.id}
                                    comment={reply}
                                    setLocalReplies={setLocalReplies}
                                    setPostReply={setPostReply}
                                />
                            ))}
                        </div>
                    </section>
                ) : undefined}
                {postReply && (
                    <PostReply
                        replyingTo={postReply}
                        setLocalReplies={setLocalReplies}
                        setPostReply={setPostReply}
                    />
                )}
            </React.Suspense>
        </>
    )
}

export default Comment
