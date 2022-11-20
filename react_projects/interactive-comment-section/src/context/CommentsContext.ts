import React, { createContext } from "react"

import { CommentAction } from "../components/CommentsSection/CommentsSection"

interface ICommentsContext {
    dispatch: React.Dispatch<CommentAction>
}

// Create a context
export const CommentsContext = createContext<ICommentsContext>({
    //appendComments: (): void => {},
    dispatch: () => {},
})
