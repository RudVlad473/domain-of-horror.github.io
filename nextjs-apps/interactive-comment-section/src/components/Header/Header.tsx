import React, { FC, useContext, useMemo } from "react"

import { UserContext } from "../../context/UserContext"
import UserDetails, { UserDetailsProps } from "../UserDetails/UserDetails"
import styles from "./Header.module.scss"

const Actions = React.lazy(() => import("../Actions/Actions"))

const Header: FC<UserDetailsProps> = (props) => {
    const currentUser = useContext(UserContext)
    const isCurrentUser = useMemo(() => {
        return currentUser.userName == props.user.userName
    }, [currentUser, props.user.userName])

    return (
        <div className={styles["header"]}>
            <UserDetails {...props} />

            <React.Suspense>
                <Actions isCurrentUser={isCurrentUser} />
            </React.Suspense>
        </div>
    )
}

export default Header
