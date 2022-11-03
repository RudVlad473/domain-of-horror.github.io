import React, { FC, useEffect, useState } from "react"
import Comment, { CommentProps } from "../Comment/Comment"
import styles from "./Replies.module.scss"

interface RepliesProps {
    replies?: Promise<CommentProps[] | undefined> | undefined
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
            {awaitedReplies?.length > 0 && (
                <section
                    className={styles["replies-section"]}
                    aria-label="replies">
                    <div
                        className={
                            styles["replies-section__left-separator"]
                        }></div>

                    <div className={styles["replies"]}>
                        {awaitedReplies?.map((reply) => (
                            <Comment
                                key={reply.id}
                                {...reply}
                            />
                        ))}
                    </div>
                </section>
            )}
        </>
    )
}

export default Replies
