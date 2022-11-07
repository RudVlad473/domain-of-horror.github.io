import React from "react"
import { createContext } from "react"
import { CommentContentProps } from "../components/CommentContent/CommentContent"

export interface ICommentContext {
    readonly id: number
    readonly userName: string
    setLocalReplies: React.Dispatch<
        React.SetStateAction<CommentContentProps[] | undefined>
    >
    isEditable: boolean
}

// Create a context
export const CommentContext = createContext<ICommentContext>({
    id: 0,
    userName: "",
    setLocalReplies: (): void => {},
    isEditable: false,
})
