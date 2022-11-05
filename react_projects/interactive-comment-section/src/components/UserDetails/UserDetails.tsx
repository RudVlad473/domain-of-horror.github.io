import React, { FC } from "react"
import { UserInfo } from "../../App"
const ContainedImage = React.lazy(
    () => import("../ContainedImage/ContainedImage")
)
//import ContainedImage from "../ContainedImage/ContainedImage"
import UserName from "../UserName/UserName"
import styles from "./UserDetails.module.scss"

export interface UserDetailsProps {
    userInfo: UserInfo
    when: string
}

const UserDetails: FC<UserDetailsProps> = ({ userInfo, when }) => {
    return (
        <div className={styles["user-details"]}>
            <React.Suspense>
                <ContainedImage src={userInfo.avatarUrl} />
            </React.Suspense>

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
