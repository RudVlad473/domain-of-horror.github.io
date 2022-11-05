import React, { FC, useContext } from "react"
const Actions = React.lazy(() => import("../Actions/Actions"))
import UserDetails from "../UserDetails/UserDetails"
import styles from "./Header.module.scss"
import { UserDetailsProps } from "../UserDetails/UserDetails"
import { UserInfo } from "../../App"
import { UserContext } from "../../context/UserContext"

export interface HeaderProps {
    userDetails: UserDetailsProps
}

const Header: FC<HeaderProps> = ({ userDetails }) => {
    const currentUser = useContext<UserInfo>(UserContext)
    const isCurrentUser = currentUser.userName == userDetails.userInfo.userName

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
