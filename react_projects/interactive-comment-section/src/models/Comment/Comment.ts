import { ReactNode } from "react"

import { ReplyProps } from "../../components/Reply/Reply"
import extractReplies from "../../helpers/functions/extractReplies"
import { IUser } from "../User/IUser"
import { FetchedComment } from "./../FetchedComment/IFetchedComment"
import { IComment } from "./IComment"

class Comment implements IComment {
    replies: Promise<ReplyProps[] | undefined>
    id: number
    likesCount: number
    article: ReactNode
    when: string
    user: IUser

    constructor(comment: IComment) {
        this.id = comment.id
        this.likesCount = comment.likesCount
        this.article = comment.article
        this.when = comment.when
        this.user = comment.user
        this.replies = comment.replies
    }

    static extractCommentFromFetchedComment(fetchedComment: FetchedComment) {
        return new Comment({
            id: fetchedComment.id,
            likesCount: fetchedComment.score,
            article: fetchedComment.content,
            when: fetchedComment.createdAt,
            user: {
                userName: fetchedComment.user.username,
                avatarUrl: fetchedComment.user.image.png,
            },
            replies: extractReplies(fetchedComment.replies),
        })
    }
}

export default Comment
