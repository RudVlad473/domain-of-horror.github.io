import React, { FC, useContext } from "react"
import { EditableContext } from "../../context/EditableContext"
import styles from "./Article.module.scss"

export interface ArticleProps {
    article: React.ReactNode
}

const Article: FC<ArticleProps> = ({ article }) => {
    const isEditable = useContext(EditableContext)

    return (
        <article
            spellCheck="false"
            contentEditable={isEditable}>
            {article}
        </article>
    )
}

export default Article
