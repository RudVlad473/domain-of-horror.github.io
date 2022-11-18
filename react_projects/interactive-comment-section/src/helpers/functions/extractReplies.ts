import { FetchedReply } from "../../components/CommentsSection/CommentsSection"
import { ReplyProps } from "../../components/Reply/Reply"
import getAvatarImagePathByUsername from "./getAvatarImagePathByUsername"

async function extractReplies(
    replies: FetchedReply[] | undefined
): Promise<ReplyProps[] | undefined> {
    const extractedReplies: ReplyProps[] | undefined = replies?.map(
        ({
            id,
            score,
            user,
            createdAt,
            content,
            replyingTo,
        }: FetchedReply): ReplyProps => ({
            id,
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
