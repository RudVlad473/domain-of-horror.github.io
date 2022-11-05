import { ReplyFormProps } from "../../components/PostReply/PostReply"
import { CommentProps } from "../../components/Comment/Comment"
import { FetchedReply } from "../../components/CommentsSection/CommentsSection"
import getAvatarImagePathByUsername from "./getAvatarImagePathByUsername"

async function extractReplies(
    replies: FetchedReply[]
): Promise<ReplyFormProps[] | undefined> {
    if (Object.keys(replies).length === 0) {
        return undefined
    }

    const extractedReplies: ReplyFormProps[] = replies.map(
        ({
            id,
            score,
            user,
            createdAt,
            content,
            replyingTo,
        }: FetchedReply): ReplyFormProps => ({
            id: `${id}`,
            likesCount: { likesCount: score },
            commentBodyInfo: {
                headerInfo: {
                    userDetails: {
                        userInfo: {
                            avatarUrl: getAvatarImagePathByUsername(
                                user["username"]
                            ),
                            userName: user["username"],
                        },
                        when: createdAt,
                    },
                },
                article: { article: content },
            },
            replyingTo: replyingTo,
        })
    )

    return extractedReplies
}

export default extractReplies
