import { UserInfo } from "../../App"
import getAvatarImagePathByUsername from "./getAvatarImagePathByUsername"

async function extractCurrentUser(commentsData: any): Promise<UserInfo> {
    const currentUser: UserInfo = {
        avatarUrl: getAvatarImagePathByUsername(
            commentsData["currentUser"]["username"]
        ),
        userName: commentsData["currentUser"]["username"],
    }

    return currentUser
}

export default extractCurrentUser
