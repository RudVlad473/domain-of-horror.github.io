import { createContext } from "react"

export interface ICommentContext {
    readonly id: number
    readonly userName: string
    // setLocalReplies: React.Dispatch<
    //     React.SetStateAction<CommentContentProps[] | undefined>
    // >
    isEditable: boolean
    replyingTo?: string
}

// Create a context
export const CommentContext = createContext<ICommentContext>({
    id: 0,
    userName: "",
    //setLocalReplies: (): void => {},
    isEditable: false,
    replyingTo: "",
})
