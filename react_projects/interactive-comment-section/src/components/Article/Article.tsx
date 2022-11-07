import React, { FC, useContext } from "react"
import { CommentContext } from "../../context/CommentContext"

export interface ArticleProps {
    article: string | React.ReactNode
}

const Article: FC<ArticleProps> = ({ article }) => {
    const { isEditable } = useContext(CommentContext)

    return <article contentEditable={isEditable} >{article}</article>
}

export default Article
