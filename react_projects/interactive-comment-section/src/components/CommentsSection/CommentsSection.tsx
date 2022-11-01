import React, { FC, useEffect, useState } from "react"
import Comment, { CommentProps } from "../Comment/Comment"
import PostForm from "../PostForm/PostForm"
import styles from "./CommentsSection.module.scss"
import commentsData from "../../data/comments.json"
import extractComments from "../../helpers/functions/extractComments"
import LoadingComments from "../UI/LoadingComments/LoadingComments"

interface CommentSectionProps {}

const CommentsSection: FC<CommentSectionProps> = () => {
    const [comments, setComments] = useState<CommentProps[]>([])

    async function fetchCommentsFromLocalJSON() {
        const data = await extractComments(commentsData)
        console.log(data)
        setComments((comments) => data)
    }

    useEffect(() => {
        fetchCommentsFromLocalJSON()
    }, [])

    return (
        <section className={styles["comments-section"]}>
            {/* <LoadingComments /> */}
            {comments?.map((comment) => (
                <Comment
                    id={comment.id}
                    key={comment.id}
                    likesCount={comment.likesCount}
                    commentBodyInfo={comment.commentBodyInfo}
                />
            ))}
            <PostForm />
        </section>
    )
}

export default CommentsSection
