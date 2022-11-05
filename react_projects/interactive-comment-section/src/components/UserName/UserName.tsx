import React, { CSSProperties, FC } from "react"
import classes from "./UserName.module.scss"

interface UserName {
    userName: string
    styles?: CSSProperties
}

const UserName: FC<UserName> = ({ userName, styles }) => {
    return (
        <span
            className={classes["username"]}
            style={styles}
            title={userName}>
            {userName}
        </span>
    )
}

export default UserName
