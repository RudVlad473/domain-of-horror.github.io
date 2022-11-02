import { createContext } from "react"
import { CommentProps } from "../components/Comment/Comment"

interface ICommentsContext {
    appendComments(comments: CommentProps[]): void
    removeComment(id: number): void
    lastCommentId: {
        id: number
    }
}

// Create a context
export const CommentsContext = createContext<ICommentsContext>({
    appendComments: (): void => {},
    removeComment: (): void => {},
    lastCommentId: {
        id: 0,
    },
})
