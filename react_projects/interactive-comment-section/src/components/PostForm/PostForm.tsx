import React, { FC, FormEvent, useContext, useRef } from "react"
import { CommentsContext } from "../../context/CommentsContext"
import { UserContext } from "../../context/UserContext"
import { CommentProps } from "../Comment/Comment"
import ForwardedCommentInput from "../CommentInput/CommentInput"
import ContainedImage from "../ContainedImage/ContainedImage"
import styles from "./PostForm.module.scss"

const PostForm: FC = () => {
    const { avatarUrl } = useContext(UserContext)

    const { appendComments } = useContext(CommentsContext)

    const commentInputRef = useRef(null)

    function addComment(e: FormEvent) {
        e.preventDefault()

        const newComment: CommentProps = {
            id: "ДОПИЛИТЬ ТЕМУ С LASTCOMMENTID",
            likesCount: {
                likesCount: 0
            },
            commentBodyInfo: {
                headerInfo: {

                },
                article

            }
        }
    }

    return (
        <form
            className={styles["post-form"]}
            onSubmit={addComment}>
            <ContainedImage
                src={avatarUrl}
                alt={"You"}
                maxWidth={"2.5rem"}
            />
            <ForwardedCommentInput ref={commentInputRef} />
            <button
                type="submit"
                className={styles["post-form__submit-button"]}>
                SEND
            </button>
        </form>
    )
}

export default PostForm
