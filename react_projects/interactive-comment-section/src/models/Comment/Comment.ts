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

    constructor({ id, likesCount, article, when, user, replies }: IComment) {
        this.id = id
        this.likesCount = likesCount
        this.article = article
        this.when = when
        this.user = user
        this.replies = replies
    }

    static getNullComment(): IComment {
        return new Comment(0, 0, null, 0, null, null)
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
