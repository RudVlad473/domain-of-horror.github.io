import React, { FC } from "react"
import PostReply from "../PostReply/PostReply"
import styles from "./Replies.module.scss"
import CommentContent, {
    CommentContentProps,
} from "../CommentContent/CommentContent"

export interface RepliesProps {
    replies?: CommentContentProps[] | undefined
    setLocalReplies: React.Dispatch<
        React.SetStateAction<CommentContentProps[] | undefined>
    >
}

const Replies: FC<RepliesProps> = ({ replies, setLocalReplies }) => {
    //TODO: сделать await реплаев тут а не в comments

    return (
        <>
            {replies?.length! > 0 && (
                <section
                    className={styles["replies-section"]}
                    aria-label="replies">
                    <div
                        className={
                            styles["replies-section__left-separator"]
                        }></div>

                    <div className={styles["replies"]}>
                        {replies?.map((reply) => (
                            <>
                                {reply.commentBodyInfo ? (
                                    <CommentContent
                                        key={reply.id}
                                        {...reply}
                                    />
                                ) : (
                                    <PostReply
                                        key={reply.id}
                                        replyingTo={reply.replyingTo}
                                        setLocalReplies={setLocalReplies}
                                    />
                                )}
                            </>
                        ))}
                    </div>
                </section>
            )}
        </>
    )
}

export default Replies
