import React, { FC } from "react"
import IAction from "../../models/ActionTypes"
import ContainedImage from "../ContainedImage/ContainedImage"
import styles from "./Action.module.scss"

const Action: FC<IAction> = ({ iconUrl, actionName, color, action }) => {
    return (
        <div
            data-name={actionName}
            className={styles["action"]}
            onClick={() => action!()}>
            <ContainedImage
                src={iconUrl}
                alt={actionName}
            />
            <span style={{ color }}>{actionName}</span>
        </div>
    )
}

export default Action
