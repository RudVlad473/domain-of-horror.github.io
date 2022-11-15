import { createContext } from "react"
import { UserInfo } from "../App"

type Reaction = "+" | "-"
export type CommentId = number
export type ReactedCommentsIds = Map<CommentId, Reaction>
export interface IUserContext extends UserInfo {
    reactedCommentsIds: ReactedCommentsIds
}

// Create a context
export const UserContext = createContext<IUserContext>({
    avatarUrl: "",
    userName: "",
    reactedCommentsIds: new Map(),
})
