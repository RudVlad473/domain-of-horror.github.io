import { FetchedComment } from "./../../components/CommentsSection/CommentsSection"
import { CommentProps } from "../../components/Comment/Comment"
import getAvatarImagePathByUsername from "./getAvatarImagePathByUsername"

async function extractComments(
    comments: FetchedComment[]
): Promise<CommentProps[] | undefined> {
    if (Object.keys(comments).length === 0) {
        return undefined
    }

    //const currentUser = await extractCurrentUser(commentsData)

    const extractedComments: CommentProps[] = comments.map(
        (comment: FetchedComment) =>
            ({
                id: `${comment["id"]}`,
                likesCount: { likesCount: comment["score"] },
                commentBodyInfo: {
                    headerInfo: {
                        userDetails: {
                            userInfo: {
                                avatarUrl: getAvatarImagePathByUsername(
                                    comment["user"]["username"]
                                ),
                                userName: comment["user"]["username"],
                            },
                            when: comment["createdAt"],
                        },
                    },
                    article: { article: comment["content"] },
                },
                replies: comment.replies
                    ? extractComments(comment.replies)
                    : undefined,
            } as CommentProps)
    )

    return extractedComments
}

export default extractComments
