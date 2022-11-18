import React, { FC, MutableRefObject } from "react"

import Article, { ArticleProps } from "../Article/Article"
import { HeaderProps } from "../Header/Header"

const Header = React.lazy(() => import("../Header/Header"))

export interface CommentBodyProps {
    headerInfo: HeaderProps
    article: ArticleProps
    articleRef: MutableRefObject<HTMLTextAreaElement>
}

const CommentBody: FC<CommentBodyProps> = ({
    headerInfo,
    article,
    articleRef,
}) => {
    return (
        <div className="comment__body">
            <React.Suspense>
                <Header {...headerInfo} />
            </React.Suspense>

            <Article article={article.article} articleRef={articleRef} />
        </div>
    )
}

export default CommentBody
