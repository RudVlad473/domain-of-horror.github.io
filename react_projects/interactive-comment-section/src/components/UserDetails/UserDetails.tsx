import React, { FC } from "react"
import { UserInfo } from "../../App"
import ContainedImage from "../ContainedImage/ContainedImage"
import UserName from "../UserName/UserName"
import styles from "./UserDetails.module.scss"

export interface UserDetailsProps {
    userInfo: UserInfo
    when: string
}

const UserDetails: FC<UserDetailsProps> = ({ userInfo, when }) => {
    return (
        <div className={styles["user-details"]}>
            <ContainedImage src={userInfo.avatarUrl} />
            <UserName userName={userInfo.userName} />
            <span
                className={styles["user-details__when"]}
                title={when}>
                {when}
            </span>
        </div>
    )
}

export default UserDetails
