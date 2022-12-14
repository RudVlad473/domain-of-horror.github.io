import { ReplyProps } from "../../components/Reply/Reply"
import { ICommentContent } from "../CommentContent/ICommentContent"

export interface IComment extends ICommentContent {
  replies: Promise<ReplyProps[] | undefined>
}

export type CommentId = number
export type Reaction = "+" | "-" | undefined

export type ReactedCommentsIds = Map<CommentId, Reaction>
