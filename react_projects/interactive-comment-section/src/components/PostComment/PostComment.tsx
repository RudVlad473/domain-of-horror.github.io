import React, {
    FC,
    MutableRefObject,
    useContext,
    useEffect,
    useRef,
} from "react"
import { CommentsContext } from "../../context/CommentsContext"
import { UserContext } from "../../context/UserContext"
import getNewComment from "../../helpers/functions/getNewComment"
import validateCommentInput, {
    MessageStates,
} from "../../helpers/functions/validateCommentInput"
import { CommentProps } from "../Comment/Comment"
const PostForm = React.lazy(() => import("../PostForm/PostForm"))

interface PostCommentProps {
    appendComments(comments: CommentProps[]): void
}

const PostComment: FC<PostCommentProps> = ({appendComments}) => {
    const { avatarUrl, userName } = useContext(UserContext)

    const commentInputRef = useRef<HTMLTextAreaElement>(
        null
    ) as MutableRefObject<HTMLTextAreaElement>
    const submitButtonRef = useRef<HTMLButtonElement>(
        null
    ) as MutableRefObject<HTMLButtonElement>

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
                textAreaRef={commentInputRef}
                onFormSubmit={addComment}
                buttonValue="SEND"
                buttonRef={submitButtonRef}
            />
        </React.Suspense>
    )
}

export default PostComment
