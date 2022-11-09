import React, { FC, useContext, useEffect, useRef, useState } from "react"
import { CommentContext } from "../../context/CommentContext"
import { UserContext } from "../../context/UserContext"
import CommentContent, {
    CommentContentProps,
} from "../CommentContent/CommentContent"
import NoComments from "../NoComments/NoComments"
import PostComment from "../PostComment/PostComment"
import PostForm from "../PostForm/PostForm"
import PostReply from "../PostReply/PostReply"
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
    const [hasPostForm, setHasPostForm] = useState<boolean>(false)

    const currentUserInfo = useContext(UserContext)

    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    function addReply() {}

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
                setLocalReplies={setLocalReplies}
            />
            <React.Suspense fallback={<NoComments />}>
                {localReplies?.length ? (
                    <Replies {...localReplies} />
                ) : undefined}
                {hasPostForm && <PostComment />}
            </React.Suspense>
        </CommentContext.Provider>

        //</CommentContext.Provider>
    )
}

export default Comment
