import React, { FC } from "react"
import PostReply, { ReplyFormProps } from "../PostReply/PostReply"
import styles from "./Replies.module.scss"
import CommentContent, {
    CommentContentProps,
} from "../CommentContent/CommentContent"
import Comment from "../Comment/Comment"

export interface RepliesProps {
    replies?: CommentContentProps[] | undefined
}

const Replies: FC<RepliesProps> = ({ replies }) => {
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
                                {reply?.commentBodyInfo ? (
                                    <CommentContent
                                        key={reply.id}
                                        {...reply}
                                    />
                                ) : (
                                    <PostReply
                                        key={reply.id}
                                        replyingTo={reply.replyingTo}
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
