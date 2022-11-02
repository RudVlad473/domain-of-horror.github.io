import React, { FC, useContext } from "react"
import Actions from "../Actions/Actions"
import UserDetails from "../UserDetails/UserDetails"
import styles from "./Header.module.scss"
import { UserDetailsProps } from "../UserDetails/UserDetails"
import { UserInfo } from "../../App"
import { UserContext } from "../../context/context"

export interface HeaderProps {
    userDetails: UserDetailsProps
}

const Header: FC<HeaderProps> = ({ userDetails }) => {
    const currentUser = useContext<UserInfo>(UserContext)
    const isCurrentUser = currentUser.userName == userDetails.userInfo.userName

    return (
        <div className={styles["header"]}>
            <UserDetails {...userDetails} />

            <Actions isCurrentUser={isCurrentUser} />
        </div>
    )
}

export default Header
