import { UserInfo } from "../../App"
import { FetchedData } from "../../components/CommentsSection/CommentsSection"
import getAvatarImagePathByUsername from "./getAvatarImagePathByUsername"

async function extractCurrentUser(
    commentsData: FetchedData
): Promise<UserInfo> {
    const currentUser: UserInfo = {
        avatarUrl: getAvatarImagePathByUsername(
            commentsData.currentUser.username
        ),
        userName: commentsData.currentUser.username,
    }

    return currentUser
}

export default extractCurrentUser
