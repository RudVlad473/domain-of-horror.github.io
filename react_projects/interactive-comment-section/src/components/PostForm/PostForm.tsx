import React, { FC, FormEvent, useCallback, useContext, useRef } from "react"
import { CommentsContext } from "../../context/CommentsContext"
import { UserContext } from "../../context/UserContext"
import getNewComment from "../../helpers/functions/getNewComment"
import validateCommentInput, {
    MessageStates,
} from "../../helpers/functions/validateCommentInput"
import { CommentProps } from "../Comment/Comment"
import ForwardedCommentInput from "../CommentInput/CommentInput"
import ContainedImage from "../ContainedImage/ContainedImage"
import styles from "./PostForm.module.scss"

const PostForm: FC = () => {
    const { avatarUrl, userName } = useContext(UserContext)

    const { appendComments, lastCommentId } = useContext(CommentsContext)

    const commentInputRef = useRef(null)

    function addComment(e: FormEvent) {
        e.preventDefault()

        const text = commentInputRef?.current.value
        const validatedInput = validateCommentInput(text)

        alert(validatedInput)

        switch (validatedInput) {
            case MessageStates.Normal: {
                break
            }
            default: {
                return
            }
        }

        const newComment: CommentProps = getNewComment({
            id: `${lastCommentId.id + 1}`,
            likesCount: 0,
            avatarUrl,
            userName,
            createdAt: "today",
            article: commentInputRef!.current!.value,
            replies: undefined,
        })

        appendComments([newComment])

        commentInputRef!.current!.value = ''
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
