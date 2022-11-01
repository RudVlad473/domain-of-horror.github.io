import React, { FC } from "react"
import IAction from "../../helpers/constants/ActionTypes"
import ContainedImage from "../ContainedImage/ContainedImage"
import styles from "./Action.module.scss"

const Action: FC<IAction> = ({ iconUrl, actionName, color }) => {
    return (
        <div className={styles["action"]}>
            <ContainedImage
                src={iconUrl}
                alt={actionName}
            />
            <span style={{ color: color }}>{actionName}</span>
        </div>
    )
}

export default Action
