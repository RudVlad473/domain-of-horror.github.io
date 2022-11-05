import React from "react"
import { createContext } from "react"
import { ReplyProps } from "../components/Replies/Replies"

interface ICommentDetailsContext {
    id: number
    userName: string
    setLocalReplies: React.Dispatch<
        React.SetStateAction<ReplyProps[] | undefined>
    >
}

// Create a context
export const CommentDetailsContext = createContext<ICommentDetailsContext>({
    id: 0,
    userName: "",
    setLocalReplies: () => {},
})
