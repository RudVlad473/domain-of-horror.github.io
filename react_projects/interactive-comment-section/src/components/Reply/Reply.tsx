import { CommentProps } from "postcss"
import React, { FC } from "react"
import styles from "./Reply.module.scss"

const Reply: FC<CommentProps> = ({ id, likesCount, commentBodyInfo }) => {
    return <div className={styles["reply"]}></div>
}

export default Reply
