import React, { FC } from "react"
import Actions from "../Actions/Actions"
import UserDetails from "../UserDetails/UserDetails"
import styles from "./Header.module.scss"
import { UserDetailsProps } from "../UserDetails/UserDetails"

export interface HeaderProps {
    userDetails: UserDetailsProps
    isCurrentUser: boolean
}

const Header: FC<HeaderProps> = ({ userDetails, isCurrentUser }) => {
    return (
        <div className={styles["header"]}>
            <UserDetails {...userDetails} />

            <Actions isCurrentUser={isCurrentUser} />
        </div>
    )
}

export default Header
