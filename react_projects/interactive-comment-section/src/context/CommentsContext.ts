import { createContext } from "react"

interface ICommentsContext {
    //appendComments(comments: CommentProps[]): void
    removeCommentOrReply(id: number): void
}

// Create a context
export const CommentsContext = createContext<ICommentsContext>({
    //appendComments: (): void => {},
    removeCommentOrReply: (): void => {},
})
