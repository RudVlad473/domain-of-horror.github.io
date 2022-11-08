import React, { FC, useCallback } from "react"
import CommentBody, { CommentBodyProps } from "../CommentBody/CommentBody"
const LikeSection = React.lazy(() => import("../LikeSection/LikeSection"))
//import styles from "../Comment/Comment.module.scss"
import { LikeSectionProps } from "../LikeSection/LikeSection"

export interface CommentContentProps {
    id: number
    likesCount: LikeSectionProps
    commentBodyInfo: CommentBodyProps
}

const CommentContent: FC<CommentContentProps> = ({
    id,
    likesCount,
    commentBodyInfo,
}) => {
    // function handleActions(e: React.MouseEvent<HTMLDivElement>) {
    //     switch (e.target.dataset["name"]) {
    //         case ActionTypes.REPLY: {
    //             addReplyForm(e.currentTarget.dataset["name"]!)
    //         }
    //     }
    //     //console.log(e.currentTarget.dataset["name"])
    // }

    const addReplyForm = useCallback((_replyingTo: string) => {
        // console.log(setLocalReplies)
        // setLocalReplies((currentLocalReplies) => [
        //     ...(currentLocalReplies?.filter(
        //         (reply) => `${reply.id}` !== "replyForm"
        //     ) || []),
        //     {
        //         id: "replyForm",
        //         replyingTo,
        //     } as ReplyFormProps,
        // ])
    }, [])

    const handleActions = useCallback(
        (_e: React.MouseEvent<HTMLDivElement>) => {
            // switch (e.target.dataset["name"]) {
            //     case ActionTypes.REPLY: {
            //         addReplyForm(e.currentTarget.dataset["name"]!)
            //     }
            // }
        },
        []
    )

    // function addReplyForm(replyingTo: string) {
    //     console.log(setLocalReplies)
    //     setLocalReplies((currentLocalReplies) => [
    //         ...(currentLocalReplies?.filter(
    //             (reply) => `${reply.id}` !== "replyForm"
    //         ) || []),
    //         {
    //             id: "replyForm",
    //             replyingTo,
    //         } as ReplyFormProps,
    //     ])
    // }

    return (
        <div
            id={`${id}`}
            data-name={commentBodyInfo.headerInfo.userDetails.userInfo.userName}
            className="comment"
            onClick={handleActions}>
            <React.Suspense>
                <LikeSection {...likesCount} />
            </React.Suspense>

            <CommentBody {...commentBodyInfo} />
        </div>
    )
}

export default CommentContent
