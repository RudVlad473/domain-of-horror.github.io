import React, { FC, memo } from "react"
import {
    AuthorActions as authorActions,
    UserActions as userActions
} from "../../models/Action/ActionTypes"
import Action from "../Action/Action"

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
                <Action key={action.actionName} {...action} />
            ))}
        </div>
    )
})

Actions.displayName = "Actions"

export default Actions
