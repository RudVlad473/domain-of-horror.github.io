import React, {
    FC,
    MutableRefObject,
    useCallback,
    useRef,
    useState,
} from "react"
import { EditableContext } from "../../context/EditableContext"
import { ActionTypes } from "../../models/ActionTypes"
import CommentBody, { CommentBodyProps } from "../CommentBody/CommentBody"
const LikeSection = React.lazy(() => import("../LikeSection/LikeSection"))
//import styles from "../Comment/Comment.module.scss"
import { LikeSectionProps } from "../LikeSection/LikeSection"
import { PostReplyProps } from "../PostReply/PostReply"
import { ReplyProps } from "../Reply/Reply"
import Button from "../UI/Button/Button"

export interface CommentContentProps {
    id: number
    likesCount: LikeSectionProps
    commentBodyInfo: CommentBodyProps
    setLocalReplies: React.Dispatch<
        React.SetStateAction<ReplyProps[] | undefined>
    >
    setPostReply: React.Dispatch<React.SetStateAction<string | null>>
}

const CommentContent: FC<CommentContentProps> = ({
    id,
    likesCount,
    commentBodyInfo,
    setLocalReplies,
    setPostReply,
}) => {
    const [isEditable, setIsEditable] = useState<boolean>(false)

    const updateButtonRef = useRef<HTMLButtonElement>(
        null
    ) as MutableRefObject<HTMLButtonElement>

    function handleActions(e: React.MouseEvent<HTMLFormElement>) {
        const actionType = (e.target as HTMLDivElement).dataset["type"]
        const replyingTo = e.currentTarget.dataset["name"]
        console.log(actionType, replyingTo)
        switch (actionType) {
            case ActionTypes.REPLY: {
                setPostReply((currentPostReply) => replyingTo as string | null)

                break
            }
            case ActionTypes.EDIT: {
                setIsEditable((isCurrentlyEditable) => !isCurrentlyEditable)

                break
            }
        }
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
    }

    return (
        <form
            id={`${id}`}
            data-name={commentBodyInfo.headerInfo.userDetails.userInfo.userName}
            className="comment"
            onClick={handleActions}
            onSubmit={handleSubmit}>
            <div className="comment__content">
                <React.Suspense>
                    <LikeSection {...likesCount} />
                </React.Suspense>
                <EditableContext.Provider value={isEditable}>
                    <CommentBody {...commentBodyInfo} />
                </EditableContext.Provider>
            </div>

            {isEditable && (
                <Button
                    buttonRef={updateButtonRef}
                    buttonValue="Update"
                    {...{ type: "submit" }}
                />
            )}
        </form>
    )
}

export default CommentContent
