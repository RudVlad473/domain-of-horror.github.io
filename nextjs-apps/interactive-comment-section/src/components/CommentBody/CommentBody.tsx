import React, { FC, MutableRefObject } from "react"

import { IUser } from "../../models/User/IUser"
import Article from "../Article/Article"

const Header = React.lazy(() => import("../Header/Header"))

export interface CommentBodyProps {
    user: IUser
    when: string
    article: React.ReactNode
    articleRef: MutableRefObject<HTMLTextAreaElement>
}

const CommentBody: FC<CommentBodyProps> = ({
    user,
    when,
    article,
    articleRef,
}) => {
    return (
        <div className="comment__body">
            <React.Suspense>
                <Header user={user} when={when} />
            </React.Suspense>

            <Article article={article} articleRef={articleRef} />
        </div>
    )
}

export default CommentBody
