import React, { FC } from "react"

import CommentContent from "../CommentContent/CommentContent"
import { ReplyProps } from "../Reply/Reply"
import styles from "./Replies.module.scss"

const Replies: FC<ReplyProps[]> = (replies) => {
    //TODO: сделать await реплаев тут а не в comments
    //TODO: сделать нормальную передачу replies

    return (
        <>
            {Object.values(replies)?.length ? (
                <section
                    className={styles["replies-section"]}
                    aria-label="replies">
                    <div
                        className={
                            styles["replies-section__left-separator"]
                        }></div>

                    <div className={styles["replies"]}>
                        {Object.values(replies)?.map((reply) => (
                            <CommentContent key={reply.id} {...reply} />
                        ))}
                    </div>
                </section>
            ) : undefined}
        </>
    )
}

export default Replies
