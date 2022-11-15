import React, { FC, useEffect, useState } from "react"
import { CommentContext } from "../../context/CommentContext"
import CommentContent, {
    CommentContentProps,
} from "../CommentContent/CommentContent"
import NoComments from "../NoComments/NoComments"
import PostReply from "../PostReply/PostReply"
import Reply, { ReplyProps } from "../Reply/Reply"
import repliesStyles from "../Replies/Replies.module.scss"
import addReplyingToArticle from "../../helpers/functions/addReplyingToArticle"

//const Replies = React.lazy(() => import("../Replies/Replies"))

export interface CommentProps extends CommentContentProps {
    replies: Promise<ReplyProps[] | undefined>
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
    const [postReply, setPostReply] = useState<string | null>(null)

    useEffect(() => {
        ;(async () => {
            const awaitedReplies = await replies
            setLocalReplies((_) => awaitedReplies)
        })()
    }, [replies])

    return (
        <>
            <CommentContent
                id={id}
                likesCount={likesCount}
                commentBodyInfo={commentBodyInfo}
                setLocalReplies={setLocalReplies}
                setPostReply={setPostReply}
            />
            <React.Suspense fallback={<NoComments />}>
                {/* {localReplies?.length ? (
                    <Replies {...localReplies} />
                ) : undefined}
                {postReply && (
                    <PostReply
                        replyingTo={postReply}
                        setLocalReplies={setLocalReplies}
                        setPostReply={setPostReply}
                    />
                )} */}
                {localReplies?.length ? (
                    <section
                        className={repliesStyles["replies-section"]}
                        aria-label="replies">
                        <div
                            className={
                                repliesStyles["replies-section__left-separator"]
                            }></div>

                        <div className={repliesStyles["replies"]}>
                            {localReplies?.map(
                                ({
                                    id,
                                    likesCount,
                                    commentBodyInfo,
                                    replyingTo,
                                }) => (
                                    <CommentContent
                                        key={id}
                                        id={id}
                                        likesCount={likesCount}
                                        commentBodyInfo={addReplyingToArticle(
                                            replyingTo,
                                            commentBodyInfo
                                        )}
                                        setLocalReplies={setLocalReplies}
                                        setPostReply={setPostReply}
                                    />
                                )
                            )}
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
