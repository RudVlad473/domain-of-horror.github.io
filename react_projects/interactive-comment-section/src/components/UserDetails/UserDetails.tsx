import React, { FC } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { IUser } from "../../App"

//import ContainedImage from "../ContainedImage/ContainedImage"
import UserName from "../UserName/UserName"
import styles from "./UserDetails.module.scss"

export interface UserDetailsProps {
    userInfo: IUser
    when: string
}

const UserDetails: FC<UserDetailsProps> = ({ userInfo, when }) => {
    return (
        <div className={styles["user-details"]}>
            <React.Suspense>
                <LazyLoadImage
                    src={userInfo.avatarUrl}
                    alt={userInfo.userName}
                    style={{ maxWidth: "2rem" }}
                />
            </React.Suspense>

            <UserName userName={userInfo.userName} />
            <span className={styles["user-details__when"]} title={when}>
                {when}
            </span>
        </div>
    )
}

export default UserDetails
