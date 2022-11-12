import React, { FC, memo, useCallback, useContext } from "react"
import { CommentContext } from "../../context/CommentContext"
import { SetLocalRepliesContext } from "../../context/SetLocalRepliesContext"
import { UserContext } from "../../context/UserContext"
import {
    UserActions as userActions,
    AuthorActions as authorActions,
} from "../../models/ActionTypes"
import Action from "../Action/Action"
import { CommentContentProps } from "../CommentContent/CommentContent"
import { ReplyFormProps } from "../PostReply/PostReply"

import styles from "./Actions.module.scss"

interface ActionsProps {
    isCurrentUser: boolean
}

const Actions: FC<ActionsProps> = memo(({ isCurrentUser }) => {
    // const { userName: localUserName } = useContext(CommentContext)
    // const { setLocalReplies } = useContext(CommentContext)

    // const addReplyForm = useCallback(() => {
    //     //TODO: добавить удаление всех остальных ответных форм

    //     setLocalReplies((currentLocalReplies) => [
    //         ...(currentLocalReplies?.filter(
    //             (reply) => `${reply.id}` !== "replyForm"
    //         ) || []),
    //         {
    //             id: "replyForm",
    //             replyingTo: localUserName,
    //         } as ReplyFormProps,
    //     ])
    // }, [localUserName])

    return (
        <div className={styles["actions"]}>
            {(isCurrentUser ? authorActions : userActions).map((action) => (
                <Action
                    key={action.actionName}
                    {...action}
                />
            ))}
        </div>
    )
})

export default Actions
