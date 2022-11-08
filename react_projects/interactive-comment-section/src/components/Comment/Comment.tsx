import React, { FC, useEffect, useState } from "react"
import { CommentContext } from "../../context/CommentContext"
import CommentContent, {
    CommentContentProps,
} from "../CommentContent/CommentContent"
import NoComments from "../NoComments/NoComments"
import { ReplyProps } from "../Reply/Reply"

const Replies = React.lazy(() => import("../Replies/Replies"))

export interface CommentProps extends CommentContentProps {
    replies: Promise<ReplyProps[] | undefined>
}

const Comment: FC<CommentProps> = ({
    id,
    likesCount,
    commentBodyInfo,
    replies,
}) => {
    const [localReplies, setLocalReplies] = useState<ReplyProps[] | undefined>(
        []
    )

    const [postForm, setPostForm] = useState()

    // const [isEditable, setIsEditable] = useState<boolean>(false)

    // const userName = commentBodyInfo.headerInfo.userDetails.userInfo.userName

    useEffect(() => {
        replies?.then((data) => {
            data?.length && setLocalReplies((_) => data)
        })
    }, [])

    return (
        <CommentContext.Provider
            value={{
                id,
                userName:
                    commentBodyInfo.headerInfo.userDetails.userInfo.userName,
                //setLocalReplies: (): void => {},
                isEditable: false,
                replyingTo: "",
            }}>
            <CommentContent
                id={id}
                likesCount={likesCount}
                commentBodyInfo={commentBodyInfo}
                //setLocalReplies={setLocalReplies}
            />
            <React.Suspense fallback={<NoComments />}>
                {localReplies?.length ? (
                    <Replies {...localReplies} />
                ) : undefined}
            </React.Suspense>
        </CommentContext.Provider>

        //</CommentContext.Provider>
    )
}

export default Comment
