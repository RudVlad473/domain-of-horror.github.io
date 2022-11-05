import React, { FC, useCallback, useContext, useRef } from "react"
import { CommentDetailsContext } from "../../context/CommentDetailsContext"
import { CommentsContext } from "../../context/CommentsContext"
import { UserContext } from "../../context/UserContext"
import getAvatarImagePathByUsername from "../../helpers/functions/getAvatarImagePathByUsername"
import getNewComment from "../../helpers/functions/getNewComment"
import validateCommentInput, {
    MessageStates,
} from "../../helpers/functions/validateCommentInput"
import { CommentProps } from "../Comment/Comment"
import PostForm from "../PostForm/PostForm"
import { ReplyProps } from "../Reply/Reply"
import UserName from "../UserName/UserName"
import colors from "../../stylesheets/abstracts/colors/_colors.module.scss"
import weights from "../../stylesheets/abstracts/fonts/_weights.module.scss"

export interface ReplyFormProps {
    replyingTo: string
}

const PostReply: FC<ReplyFormProps> = ({ replyingTo }) => {
    const { avatarUrl, userName } = useContext(UserContext)
    const { setLocalReplies } = useContext(CommentDetailsContext)
    const { lastId } = useContext(CommentsContext)

    // уцйу
    // //add reply
    const replyInputRef = useRef<HTMLTextAreaElement>(null)

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
                (reply) => reply.id !== "replyForm"
            ) || []),
            {
                id: `${lastId + 1}`,
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
