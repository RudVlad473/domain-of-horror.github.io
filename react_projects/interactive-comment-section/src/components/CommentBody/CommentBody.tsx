import React, { FC } from "react"
import Article, { ArticleProps } from "../Article/Article"
const Header = React.lazy(() => import("../Header/Header"))
import { HeaderProps } from "../Header/Header"

export interface CommentBodyProps {
    headerInfo: HeaderProps
    article: ArticleProps
}

const CommentBody: FC<CommentBodyProps> = ({ headerInfo, article }) => {
    return (
        <div className="comment__body">
            <React.Suspense>
                <Header {...headerInfo} />
            </React.Suspense>

            <Article article={article.article} />
        </div>
    )
}

export default CommentBody
