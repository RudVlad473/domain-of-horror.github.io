import React from "react"
import { CommentBodyProps } from "../../components/CommentBody/CommentBody"
import UserName from "../../components/UserName/UserName"

import colors from "../../stylesheets/abstracts/colors/_colors.module.scss"
import weights from "../../stylesheets/abstracts/fonts/_weights.module.scss"

function addReplyingToArticle(
    replyingTo: string,
    commentBodyInfo: CommentBodyProps
): CommentBodyProps {
    return {
        ...commentBodyInfo,
        article: {
            article: (
                <>
                    <UserName
                        userName={`@${replyingTo}, `}
                        styles={{
                            color: colors["lightBlue"],
                            fontWeight: weights["bold"],
                        }}
                    />
                    {commentBodyInfo.article.article}
                </>
            ),
        },
    }
}

export default addReplyingToArticle
