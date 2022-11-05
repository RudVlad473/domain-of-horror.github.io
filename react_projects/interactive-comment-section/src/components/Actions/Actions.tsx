import React, { FC, useCallback, useContext } from "react"
import { CommentDetailsContext } from "../../context/CommentDetailsContext"
import { CommentsContext } from "../../context/CommentsContext"
import { UserContext } from "../../context/UserContext"
import {
    UserActions as userActions,
    AuthorActions as authorActions,
} from "../../models/ActionTypes"
import Action from "../Action/Action"
import { CommentProps } from "../Comment/Comment"
import { ReplyProps } from "../Reply/Reply"

import { ReplyFormProps } from "../PostReply/PostReply"
import styles from "./Actions.module.scss"

interface ActionsProps {
    isCurrentUser: boolean
}

const Actions: FC<ActionsProps> = ({ isCurrentUser }) => {
    const { userName: localUserName, setLocalReplies } = useContext(
        CommentDetailsContext
    )
    //const { avatarUrl: currentUserAvatarUrl } = useContext(UserContext)

    const addReplyForm = useCallback(() => {
        //TODO: добавить удаление всех остальных ответных форм

        setLocalReplies((currentLocalReplies) => [
            ...(currentLocalReplies?.filter(
                (reply) => reply?.id !== "replyForm"
            ) || []),
            {
                id: "replyForm",
                replyingTo: localUserName,
            } as ReplyProps,
        ])
    }, [localUserName])

    return (
        <div className={styles["actions"]}>
            {(isCurrentUser ? authorActions : userActions).map((action) => (
                <Action
                    key={action.actionName}
                    {...action}
                    action={
                        {
                            Reply: addReplyForm,
                        }[action.actionName]
                    }
                />
            ))}
        </div>
    )
}

export default Actions
