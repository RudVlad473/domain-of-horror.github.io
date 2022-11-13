import React, { forwardRef, MutableRefObject, useContext } from "react"
import { EditableContext } from "../../context/EditableContext"

export interface ArticleProps {
    article: React.ReactNode
    articleRef?: MutableRefObject<HTMLTextAreaElement>
}

const Article = forwardRef(({ article, articleRef }: ArticleProps) => {
    const isEditable = useContext(EditableContext)

    return (
        <article
            ref={articleRef}
            spellCheck="false"
            contentEditable={isEditable}>
            {article}
        </article>
    )
})

export default Article
