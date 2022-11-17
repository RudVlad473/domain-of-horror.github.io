import React, { useEffect, useState } from "react"
import CommentsSection from "./components/CommentsSection/CommentsSection"
import { IUserContext, UserContext } from "./context/UserContext"
import commentsData from "./data/comments.json"
import extractCurrentUser from "./helpers/functions/extractCurrentUser"

export interface UserInfo {
    avatarUrl: string
    userName: string
}

const App = () => {
    const [currentUser, setCurrentUser] = useState<IUserContext>({
        avatarUrl: "",
        userName: "",
        reactedCommentsIds: new Map(),
    })

    async function fetchCurrentUserLocalJSON() {
        const data = await extractCurrentUser(commentsData)
        setCurrentUser(() => ({
            ...data,
            reactedCommentsIds: new Map(),
        }))
    }

    useEffect(() => {
        fetchCurrentUserLocalJSON()
    }, [])

    return (
        <React.StrictMode>
            <UserContext.Provider value={currentUser}>
                <CommentsSection />
            </UserContext.Provider>
        </React.StrictMode>
    )
}

export default App
