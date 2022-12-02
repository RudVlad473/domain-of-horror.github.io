import { ReplyProps } from "../../components/Reply/Reply"
import { IUser } from "../User/IUser"

export interface ICommentContent {
    id: CommentId
    likesCount: number
    article: React.ReactNode
    when: string
    user: IUser
}

export interface IComment extends ICommentContent {
    replies: Promise<ReplyProps[] | undefined>
}

export type CommentId = number
export type Reaction = "+" | "-" | undefined

export type ReactedCommentsIds = Map<CommentId, Reaction>
