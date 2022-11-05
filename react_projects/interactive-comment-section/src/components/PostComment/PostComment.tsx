import React, { FC, useContext, useEffect, useRef } from "react"
import { CommentsContext } from "../../context/CommentsContext"
import { UserContext } from "../../context/UserContext"
import getNewComment from "../../helpers/functions/getNewComment"
import validateCommentInput, {
    MessageStates,
} from "../../helpers/functions/validateCommentInput"
import { CommentProps } from "../Comment/Comment"
const PostForm = React.lazy(() => import("../PostForm/PostForm"))

const PostComment: FC = () => {
    const { avatarUrl, userName } = useContext(UserContext)

    const { appendComments } = useContext(CommentsContext)

    const commentInputRef = useRef<HTMLTextAreaElement>(null)
    const submitButtonRef = useRef<HTMLButtonElement>(null)

    function addComment() {
        const text = commentInputRef?.current!.value
        const validatedInput = validateCommentInput(text)

        switch (validatedInput) {
            case MessageStates.Normal: {
                break
            }
            default: {
                alert(validatedInput)
                return
            }
        }

        const newComment: CommentProps = getNewComment({
            id: "",
            likesCount: 0,
            avatarUrl,
            userName,
            createdAt: "today",
            article: commentInputRef!.current!.value,
            replies: undefined,
        })
        appendComments([newComment])

        commentInputRef!.current!.value = ""
    }

    useEffect(() => {
        window.addEventListener("keypress", (e: KeyboardEvent) => {
            e.stopImmediatePropagation()
            if (e.key == "Enter") {
                submitButtonRef!.current!.click()
            }
        })
    }, [])

    return (
        <React.Suspense>
            <PostForm
                id={0}
                avatarUrl={avatarUrl}
                action={addComment}
                buttonValue={"Send"}
                buttonRef={submitButtonRef}
                textAreaRef={commentInputRef}
            />
        </React.Suspense>
    )
}

export default PostComment
