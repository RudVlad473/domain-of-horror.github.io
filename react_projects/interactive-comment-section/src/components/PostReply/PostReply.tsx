import React, { FC, useCallback, useContext, useEffect, useRef } from "react"
import { UserContext } from "../../context/UserContext"
import getNewComment from "../../helpers/functions/getNewComment"
import validateCommentInput, {
    MessageStates,
} from "../../helpers/functions/validateCommentInput"
import { ReplyProps } from "../Reply/Reply"
const PostForm = React.lazy(() => import("../PostForm/PostForm"))

export interface PostReplyProps {
    replyingTo: string
    setLocalReplies: React.Dispatch<
        React.SetStateAction<ReplyProps[] | undefined>
    >
    setPostReply: React.Dispatch<React.SetStateAction<string | null>>
}

const PostReply: FC<PostReplyProps> = ({
    replyingTo,
    setLocalReplies,
    setPostReply,
}) => {
    const { avatarUrl, userName } = useContext(UserContext)

    const commentInputRef = useRef<HTMLTextAreaElement>(
        null
    ) as React.MutableRefObject<HTMLTextAreaElement>
    const submitButtonRef = useRef<HTMLButtonElement>(
        null
    ) as React.MutableRefObject<HTMLButtonElement>

    const addReply = useCallback(() => {
        if (!commentInputRef) {
            throw new Error(`${commentInputRef}`)
        }
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

        const newReply: ReplyProps = {
            ...getNewComment({
                id: "",
                likesCount: 0,
                avatarUrl,
                userName,
                createdAt: "today",
                article: commentInputRef?.current?.value!,
                replies: undefined,
            }),
            replyingTo,
        }
        setPostReply((_) => null)
        setLocalReplies((currentReplies) => [
            ...(currentReplies || []),
            newReply,
        ])

        commentInputRef!.current!.value = ""
    }, [commentInputRef])
    // function addReply() {
    //     const text = commentInputRef?.current!.value
    //     const validatedInput = validateCommentInput(text)

    //     switch (validatedInput) {
    //         case MessageStates.Normal: {
    //             break
    //         }
    //         default: {
    //             alert(validatedInput)
    //             return
    //         }
    //     }

    //     const newReply: ReplyProps = {
    //         ...getNewComment({
    //             id: "",
    //             likesCount: 0,
    //             avatarUrl,
    //             userName,
    //             createdAt: "today",
    //             article: commentInputRef?.current?.value!,
    //             replies: undefined,
    //         }),
    //         replyingTo,
    //     }
    //     setLocalReplies((currentReplies) => [
    //         ...(currentReplies || []),
    //         newReply,
    //     ])

    //     commentInputRef!.current!.value = ""
    // }

    function clickSubmitOnButtonPush(e: KeyboardEvent) {
        e.stopImmediatePropagation()
        if (e.key == "Enter") {
            submitButtonRef?.current?.click()
        }
    }

    useEffect(() => {
        window.addEventListener("keypress", clickSubmitOnButtonPush)

        return () => {
            window.removeEventListener("keypress", clickSubmitOnButtonPush)
        }
    }, [])

    return (
        <React.Suspense>
            <PostForm
                key={replyingTo}
                textAreaRef={commentInputRef}
                onFormSubmit={addReply}
                buttonValue="Reply"
                buttonRef={submitButtonRef}
            />
        </React.Suspense>
    )
}

export default PostReply
