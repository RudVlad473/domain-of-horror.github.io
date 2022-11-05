import React, { FC } from "react"

export interface ArticleProps {
    article: string
}

const Article: FC<ArticleProps> = ({ article }) => {
    return <article>{article}</article>
}

export default Article
