import React, { FC, useEffect, useState } from "react"
import { CommentContext } from "../../context/CommentContext"
import { SetLocalRepliesContext } from "../../context/SetLocalRepliesContext"
import CommentContent, {
    CommentContentProps,
} from "../CommentContent/CommentContent"
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

    const [isEditable, setIsEditable] = useState<boolean>(false)

    const userName = commentBodyInfo.headerInfo.userDetails.userInfo.userName

    useEffect(() => {
        replies?.then((data) => {
            data?.length! > 0 && setLocalReplies((_) => data)
        })
    }, [])

    return (
        
        <CommentContext.Provider
            value={{
                id,
                userName,
                setLocalReplies,
                isEditable,
            }}>
            <CommentContent
                id={id}
                likesCount={likesCount}
                commentBodyInfo={commentBodyInfo}
            />
            <React.Suspense fallback={<NoComments />}>
                {localReplies?.length! > 0 && (
                    <Replies replies={localReplies} />
                )}
            </React.Suspense>
        </CommentContext.Provider>
    )
}

export default Comment
