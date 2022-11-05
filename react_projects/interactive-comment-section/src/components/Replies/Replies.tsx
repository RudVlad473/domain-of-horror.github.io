import React, { FC, useContext } from "react"
import { CommentDetailsContext } from "../../context/CommentDetailsContext"
import { UserContext } from "../../context/UserContext"
import Comment, { CommentProps, ICommentContent } from "../Comment/Comment"
import Reply, { ReplyProps } from "../Reply/Reply"
import PostReply, { ReplyFormProps } from "../PostReply/PostReply"
import styles from "./Replies.module.scss"

export interface RepliesProps {
    replies?: ReplyProps[] | undefined
}

const Replies: FC<RepliesProps> = ({ replies }) => {
    // const [awaitedReplies, setAwaitedReplies] = useState<
    //     CommentProps[] | undefined
    // >([])

    const { userName } = useContext(CommentDetailsContext)

    const { avatarUrl } = useContext(UserContext)

    // useEffect(() => {
    //     repliesPromise?.then((data) => {
    //         setAwaitedReplies((_) => data)
    //         setReplies((_) => data)
    //     })
    // }, [])

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
                                    <Reply
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
