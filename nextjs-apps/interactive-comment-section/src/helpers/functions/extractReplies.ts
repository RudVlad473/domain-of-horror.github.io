import { ReplyProps } from "../../components/Reply/Reply"
import { FetchedReply } from "../../models/FetchedComment/IFetchedComment"
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
            likesCount: score,
            user: {
                avatarUrl: getAvatarImagePathByUsername(user["username"]),
                userName: user["username"],
            },
            when: createdAt,
            article: content,
            replyingTo: replyingTo,
        })
    )

    return extractedReplies
}

export default extractReplies
