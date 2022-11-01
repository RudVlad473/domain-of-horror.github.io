import { UserInfo } from "./../features/User/currentUserSlice";
import { createContext } from "react"

// Create a context
export const UserContext = createContext<UserInfo>({
    avatarUrl: "",
    userName: "",
})
