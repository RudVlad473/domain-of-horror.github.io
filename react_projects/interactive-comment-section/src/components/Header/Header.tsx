import React, { FC, useContext, useMemo } from "react"
const Actions = React.lazy(() => import("../Actions/Actions"))
import UserDetails, { UserDetailsProps } from "../UserDetails/UserDetails"
import styles from "./Header.module.scss"

import { UserContext } from "../../context/UserContext"

export interface HeaderProps {
    userDetails: UserDetailsProps
}

const Header: FC<HeaderProps> = ({ userDetails }) => {
    const currentUser = useContext(UserContext)
    const isCurrentUser = useMemo(() => {
        return currentUser.userName == userDetails.userInfo.userName
    }, [currentUser, userDetails.userInfo.userName])

    return (
        <div className={styles["header"]}>
            <UserDetails {...userDetails} />

            <React.Suspense>
                <Actions isCurrentUser={isCurrentUser} />
            </React.Suspense>
        </div>
    )
}

export default Header
