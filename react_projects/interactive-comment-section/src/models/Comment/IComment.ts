import { CommentBodyProps } from "../../components/CommentBody/CommentBody"
import { LikeSectionProps } from "../../components/LikeSection/LikeSection"
import { ReplyProps } from "../../components/Reply/Reply"

export interface ICommentContent {
    id: CommentId
    likesCount: LikeSectionProps
    commentBodyInfo: CommentBodyProps
}

export interface IComment extends ICommentContent {
    replies: Promise<ReplyProps[] | undefined>
}

export type Reaction = "+" | "-" | undefined
export type CommentId = number
export type ReactedCommentsIds = Map<CommentId, Reaction>
