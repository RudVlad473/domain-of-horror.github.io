import { FetchedData } from "../../components/CommentsSection/CommentsSection"
import { IUser } from "../../models/User/IUser"
import getAvatarImagePathByUsername from "./getAvatarImagePathByUsername"

async function extractCurrentUser(commentsData: FetchedData): Promise<IUser> {
    const currentUser: IUser = {
        avatarUrl: getAvatarImagePathByUsername(
            commentsData.currentUser.username
        ),
        userName: commentsData.currentUser.username,
    }

    return currentUser
}

export default extractCurrentUser
