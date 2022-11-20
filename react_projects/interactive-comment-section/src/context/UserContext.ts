import { createContext } from "react"

import { ICurrentUser } from "../models/User/IUser"

//DO NOT CHANGE UNDEFINED

// Create a context
export const UserContext = createContext<ICurrentUser>({
    avatarUrl: "",
    userName: "",
    reactedCommentsIds: new Map(),
})
