import { CommentBodyProps } from "../components/CommentBody/CommentBody"
import { LikeSectionProps } from "../components/LikeSection/LikeSection"
import { ReplyProps } from "../components/Reply/Reply"
import { CommentProps } from "./../components/Comment/Comment"

class CommentModel implements CommentProps {
    replies: Promise<ReplyProps[] | undefined>
    id: number
    likesCount: LikeSectionProps
    commentBodyInfo: CommentBodyProps

    constructor({
        id,
        likesCount,
        article,
        userName,
        avatarUrl,
        when,
        replies,
    }: {
        id: number
        likesCount: number
        article: React.ReactNode
        userName: string
        avatarUrl: string
        when: string
        replies: Promise<ReplyProps[] | undefined>
    }) {
        this.id = id
        this.likesCount = { likesCount }
        this.commentBodyInfo = {
            article: { article },
            headerInfo: {
                userDetails: {
                    userInfo: {
                        userName,
                        avatarUrl,
                    },
                    when,
                },
            },
        }
        this.replies = replies
    }

    
}
