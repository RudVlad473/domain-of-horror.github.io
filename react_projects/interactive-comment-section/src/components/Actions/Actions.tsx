import React, { FC, useContext } from "react"
import { UserContext } from "../../context/context"
import {
    UserActions as userActions,
    AuthorActions as authorActions,
} from "../../helpers/constants/ActionTypes"
import Action from "../Action/Action"
import styles from "./Actions.module.scss"

interface ActionsProps {
    isCurrentUser: boolean
}

const Actions: FC<ActionsProps> = ({ isCurrentUser }) => {
    return (
        <div className={styles["actions"]}>
            {(isCurrentUser ? authorActions : userActions).map((action) => (
                <Action
                    key={action.actionName}
                    {...action}
                />
            ))}
        </div>
    )
}

export default Actions
