import { CommentProps } from "../../components/Comment/Comment"
import { FetchedComment } from "../../models/FetchedComment/IFetchedComment"
import extractReplies from "./extractReplies"
import getAvatarImagePathByUsername from "./getAvatarImagePathByUsername"

async function extractComments(
    comments: FetchedComment[]
): Promise<CommentProps[] | undefined> {
    if (Object.keys(comments).length === 0) {
        return undefined
    }

    //const currentUser = await extractCurrentUser(commentsData)

    const extractedComments: CommentProps[] = comments.map(
        (comment: FetchedComment): CommentProps => ({
            id: comment["id"],
            likesCount: comment["score"],
            user: {
                avatarUrl: getAvatarImagePathByUsername(
                    comment["user"]["username"]
                ),
                userName: comment["user"]["username"],
            },
            when: comment["createdAt"],
            article: comment["content"],
            replies: extractReplies(comment.replies),
        })
    )

    return extractedComments
}

export default extractComments
