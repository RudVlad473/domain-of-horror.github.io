import { createContext } from "react"
import { CommentProps } from "../components/Comment/Comment"

interface ICommentsContext {
    appendComments(comments: CommentProps[]): void
    removeComment(id: number): void
    readonly lastId: number
}

// Create a context
export const CommentsContext = createContext<ICommentsContext>({
    appendComments: (): void => {},
    removeComment: (): void => {},
    lastId: 0,
})
