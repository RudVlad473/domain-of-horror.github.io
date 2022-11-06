import React, { FC, useEffect, useState } from "react"
import { CommentBodyProps } from "../CommentBody/CommentBody"
import CommentContent, {
    CommentContentProps,
} from "../CommentContent/CommentContent"
import { LikeSectionProps } from "../LikeSection/LikeSection"
import NoComments from "../NoComments/NoComments"
const Replies = React.lazy(() => import("../Replies/Replies"))

export interface CommentProps extends CommentContentProps {
    replies?: Promise<CommentContentProps[] | undefined> | undefined
}

const Comment: FC<CommentProps> = ({
    id,
    likesCount,
    commentBodyInfo,
    replies,
}) => {
    const [localReplies, setLocalReplies] = useState<
        CommentContentProps[] | undefined
    >([])

    useEffect(() => {
        replies?.then((data) => {
            data?.length! > 0 && setLocalReplies((_) => data)
        })
    }, [])

    return (
        <>
            <CommentContent
                id={id}
                likesCount={likesCount}
                commentBodyInfo={commentBodyInfo}
            />
            <React.Suspense fallback={<NoComments />}>
                {localReplies?.length! > 0 && (
                    <Replies
                        replies={localReplies}
                        setLocalReplies={setLocalReplies}
                    />
                )}
            </React.Suspense>
        </>
    )
}

export default Comment
