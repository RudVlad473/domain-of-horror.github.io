import React, { FC, useContext } from "react"
import { CommentDetailsContext } from "../../context/CommentDetailsContext"
import IAction from "../../models/ActionTypes"
import ContainedImage from "../ContainedImage/ContainedImage"
import styles from "./Action.module.scss"

const Action: FC<IAction> = ({ iconUrl, actionName, color, action }) => {
    const { id } = useContext(CommentDetailsContext)

    return (
        <div
            className={styles["action"]}
            onClick={() => action!(id)}>
            <ContainedImage
                src={iconUrl}
                alt={actionName}
            />
            <span style={{ color }}>{actionName}</span>
        </div>
    )
}

export default Action
