import { createContext } from "react"
import { UserInfo } from "../App"

// Create a context
export const UserContext = createContext<UserInfo>({
    avatarUrl: "",
    userName: "",
})
