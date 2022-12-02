import React, { useEffect, useState } from "react"

import CommentsSection from "./components/CommentsSection/CommentsSection"
import { UserContext } from "./context/UserContext"
import commentsData from "./data/comments.json"
import extractCurrentUser from "./helpers/functions/extractCurrentUser"
import { ICurrentUser } from "./models/User/IUser"

const App = () => {
    const [currentUser, setCurrentUser] = useState<ICurrentUser>({
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
