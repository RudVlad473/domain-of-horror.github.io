import React, { useEffect, useState } from "react"
import CommentsSection from "./components/CommentsSection/CommentsSection"
import { UserContext } from "./context/UserContext"
import commentsData from "./data/comments.json"
import extractCurrentUser from "./helpers/functions/extractCurrentUser"

export interface UserInfo {
    avatarUrl: string
    userName: string
}

const App = () => {
    const [currentUser, setCurrentUser] = useState<UserInfo>({
        avatarUrl: "",
        userName: "",
    })

    async function fetchCurrentUserLocalJSON() {
        const data = await extractCurrentUser(commentsData)
        setCurrentUser((currentUser) => data)
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
