import { CommentProps } from "../../components/Comment/Comment"
import extractCurrentUser from "./extractCurrentUser"
import getAvatarImagePathByUsername from "./getAvatarImagePathByUsername"

async function extractComments(commentsData: any): Promise<CommentProps[]> {
    const currentUser = await extractCurrentUser(commentsData)

    const comments: CommentProps[] = commentsData["comments"].map(
        (comment) =>
            ({
                id: comment["id"],
                likesCount: comment["score"],
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
                        isCurrentUser:
                            currentUser.userName == comment["user"]["username"],
                    },
                    article: { article: comment["content"] },
                },
                levelOfIndent: comment["replyingTo"] ? 1 : 0,
            } as CommentProps)
    )

    return comments
}

export default extractComments
