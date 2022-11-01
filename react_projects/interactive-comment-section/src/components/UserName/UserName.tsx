import React, { FC } from "react"
import styles from "./UserName.module.scss"

interface UserName {
    userName: string
}

const UserName: FC<UserName> = ({ userName }) => {
    return <span className={styles["username"]} title={userName}>{userName}</span>
}

export default UserName
