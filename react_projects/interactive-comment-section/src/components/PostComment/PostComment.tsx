import React, {
    FC,
    MutableRefObject,
    useContext,
    useEffect,
    useRef,
} from "react"

import { CommentsContext } from "../../context/CommentsContext"
import { UserContext } from "../../context/UserContext"
import validateCommentInput, {
    MessageStates,
} from "../../helpers/functions/validateCommentInput"
import Comment from "../../models/Comment/Comment"
import { CommentProps } from "../Comment/Comment"

const PostForm = React.lazy(() => import("../PostForm/PostForm"))

interface PostCommentProps {}

const PostComment: FC<PostCommentProps> = () => {
    const { avatarUrl, userName } = useContext(UserContext)

    const commentInputRef = useRef<HTMLTextAreaElement>(
        null
    ) as MutableRefObject<HTMLTextAreaElement>
    const submitButtonRef = useRef<HTMLButtonElement>(
        null
    ) as MutableRefObject<HTMLButtonElement>

    const { dispatch } = useContext(CommentsContext)

    function addComment() {
        const text = commentInputRef.current.value
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

        const newComment: CommentProps = new Comment({
            id: 0,
            likesCount: 0,
            user: { userName, avatarUrl },
            when: "today",
            article: commentInputRef.current.value,
            replies: (async () => undefined)(),
        })
        dispatch({ type: "CREATE", payload: [newComment] })

        commentInputRef.current.value = ""
    }

    useEffect(() => {
        window.addEventListener("keypress", (e: KeyboardEvent) => {
            e.stopImmediatePropagation()
            if (e.key == "Enter") {
                submitButtonRef.current.click()
            }
        })
    }, [])

    return (
        <React.Suspense>
            <PostForm
                textAreaRef={commentInputRef}
                onFormSubmit={addComment}
                buttonValue="SEND"
                buttonRef={submitButtonRef}
            />
        </React.Suspense>
    )
}

export default PostComment
