import { CommentProps } from "../../components/Comment/Comment"
import { FetchedComment } from "../../components/CommentsSection/CommentsSection"
import extractComments from "./extractComments"
import getAvatarImagePathByUsername from "./getAvatarImagePathByUsername"

function getNewComment({
    id,
    likesCount,
    avatarUrl,
    userName,
    createdAt,
    article,
    replies
}: {
    id: number
    likesCount: number
    avatarUrl: string
    userName: string
    createdAt: string
    article: string
    replies: FetchedComment[] | undefined
}): CommentProps {
    return {
        id,
        likesCount: { likesCount },
        commentBodyInfo: {
            headerInfo: {
                userDetails: {
                    userInfo: {
                        avatarUrl: getAvatarImagePathByUsername(userName),
                        userName
                    },
                    when: createdAt
                }
            },
            article: { article }
        },
        replies: replies ? extractComments(replies) : undefined
    }
}

export default getNewComment
