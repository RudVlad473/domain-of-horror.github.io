import { ReactedCommentsIds } from "../Comment/IComment"

export interface IUser {
    avatarUrl: string
    userName: string
}

export interface ICurrentUser extends IUser {
    reactedCommentsIds: ReactedCommentsIds
}