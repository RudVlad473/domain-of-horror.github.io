import React, { FC, useCallback, useContext, useRef } from "react"
import { CommentsContext } from "../../context/CommentsContext"
import { UserContext } from "../../context/UserContext"
import getAvatarImagePathByUsername from "../../helpers/functions/getAvatarImagePathByUsername"
import validateCommentInput, {
    MessageStates,
} from "../../helpers/functions/validateCommentInput"
import PostForm from "../PostForm/PostForm"
import UserName from "../UserName/UserName"
import colors from "../../stylesheets/abstracts/colors/_colors.module.scss"
import weights from "../../stylesheets/abstracts/fonts/_weights.module.scss"
import { CommentContext } from "../../context/CommentContext"

export interface ReplyFormProps {
    id?: string
    replyingTo: string
}

const PostReply: FC<ReplyFormProps> = ({ replyingTo }) => {
    const { avatarUrl, userName } = useContext(UserContext)

    const { lastId } = useContext(CommentsContext)

    const replyInputRef = useRef<HTMLTextAreaElement>(null)

    const { setLocalReplies } = useContext(CommentContext)

    const addReply = useCallback(() => {
        const text = replyInputRef!.current!.value

        const validatedInput = validateCommentInput(text)

        switch (validatedInput) {
            case MessageStates.Normal: {
                break
            }
            default: {
                alert(validatedInput)
                return
            }
        }

        setLocalReplies((currentLocalReplies) => [
            ...(currentLocalReplies?.filter(
                (reply) => `${reply.id}` !== "replyForm"
            ) || []),
            {
                id: lastId + 1,
                likesCount: { likesCount: 0 },
                commentBodyInfo: {
                    headerInfo: {
                        userDetails: {
                            userInfo: {
                                avatarUrl:
                                    getAvatarImagePathByUsername(userName),
                                userName,
                            },
                            when: "today",
                        },
                    },
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
                                {text}
                            </>
                        ),
                    },
                },
            },
        ])
    }, [avatarUrl, replyingTo, lastId])

    return (
        <PostForm
            formId={"replyForm"}
            avatarUrl={avatarUrl}
            textAreaRef={replyInputRef}
            buttonValue={"Reply"}
            action={addReply}
        />
    )
}

export default PostReply
