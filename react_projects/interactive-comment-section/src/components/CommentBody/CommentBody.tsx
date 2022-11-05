import React, { FC } from "react"
import Article, { ArticleProps } from "../Article/Article"
import CommentInput from "../CommentInput/CommentInput"
import Header, { HeaderProps } from "../Header/Header"
import styles from "./CommentBody.module.scss"

export interface CommentBodyProps {
    headerInfo: HeaderProps
    article: ArticleProps
}

const CommentBody: FC<CommentBodyProps> = ({ headerInfo, article }) => {
    return (
        <div className={styles["comment__body"]}>
            <Header {...headerInfo} />
            {/* <CommentInput isEditable={false}>{article.article}</CommentInput> */}
            <Article article={article.article} />
        </div>
    )
}

export default CommentBody
