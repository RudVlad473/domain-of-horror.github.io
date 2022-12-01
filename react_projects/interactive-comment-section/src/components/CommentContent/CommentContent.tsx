import React, {
    FC,
    MutableRefObject,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react"

import { CommentContext } from "../../context/CommentContext"
import { CommentsContext } from "../../context/CommentsContext"
import { EditableContext } from "../../context/EditableContext"
import validateCommentInput, {
    MessageStates,
} from "../../helpers/functions/validateCommentInput"
import { ActionTypes } from "../../models/Action/ActionTypes"
import Comment from "../../models/Comment/Comment"
import { ICommentContent } from "../../models/Comment/IComment"
import CommentBody from "../CommentBody/CommentBody"
//import styles from "../Comment/Comment.module.scss"
import Modal, { ModalProps } from "../Modal/Modal"
import { ReplyProps } from "../Reply/Reply"
import Button from "../UI/Button/Button"

const LikeSection = React.lazy(() => import("../LikeSection/LikeSection"))

export interface CommentContentProps {
    comment: ICommentContent
    setLocalReplies: React.Dispatch<
        React.SetStateAction<ReplyProps[] | undefined>
    >
    setPostReply: React.Dispatch<React.SetStateAction<string | null>>
}

const CommentContent: FC<CommentContentProps> = ({
    comment,
    setLocalReplies,
    setPostReply,
}) => {
    const [isEditable, setIsEditable] = useState<boolean>(false)
    const [article, setArticle] = useState<string | null>(null)
    const [deleteModal, setDeleteModal] = useState<ModalProps | null>(null)

    const submitButtonRef = useRef<HTMLButtonElement>(
        null
    ) as MutableRefObject<HTMLButtonElement>
    const editableTextAreaRef = useRef<HTMLTextAreaElement>(
        null
    ) as MutableRefObject<HTMLTextAreaElement>

    const { dispatch: dispatchComments } = useContext(CommentsContext)

    useEffect(() => {
        setArticle(() => editableTextAreaRef?.current?.textContent)
    }, [editableTextAreaRef])

    function handleActions(e: React.MouseEvent<HTMLFormElement>) {
        const actionType = (e.target as HTMLDivElement).dataset["type"]
        const replyingTo = e.currentTarget.dataset["name"]

        switch (actionType) {
            case ActionTypes.REPLY: {
                setPostReply(() => replyingTo as string | null)

                break
            }
            case ActionTypes.EDIT: {
                setIsEditable((isCurrentlyEditable) => !isCurrentlyEditable)

                break
            }
            case ActionTypes.DELETE: {
                const currentCommentId = +e.currentTarget.id
                const commentToDelete = Comment.getNullComment()
                commentToDelete.id = currentCommentId

                deleteModal
                    ? setDeleteModal(null)
                    : setDeleteModal({
                          onSubmit: () => {
                              dispatchComments({
                                  type: "DELETE",
                                  comments: [commentToDelete],
                              })
                              setDeleteModal(null)
                          },
                          onSubmitButton: { buttonValue: "YES, DELETE" },
                          onDecline: () => {
                              setDeleteModal(null)
                          },
                          onDeclineButton: { buttonValue: "NO, CANCEL" },
                          header: "Delete comment",
                          descr: "Are you sure you want to delete this comment? This will remove the comment and can't be undone.",
                      })
            }
        }
    }
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        const articleBeforeEdit = article
        const articleAfterEdit = editableTextAreaRef?.current

        if (!articleAfterEdit) {
            return
        }

        const validatedInput = validateCommentInput(
            articleAfterEdit.textContent as string
        )

        switch (validatedInput) {
            case MessageStates.Normal: {
                break
            }
            default: {
                alert(validatedInput)
                articleAfterEdit.textContent = articleBeforeEdit

                break
            }
        }
        setIsEditable(() => false)
    }

    return (
        <CommentContext.Provider
            value={{
                id: comment.id,
                userName: comment.user.userName,
                isEditable,
            }}>
            <form
                id={`${comment.id}`}
                data-name={comment.user.userName}
                className="comment"
                onClick={handleActions}
                onSubmit={handleSubmit}>
                <div className="comment__content">
                    <React.Suspense>
                        <LikeSection likesCount={comment.likesCount} />
                    </React.Suspense>
                    <EditableContext.Provider value={isEditable}>
                        <CommentBody
                            {...comment}
                            articleRef={editableTextAreaRef}
                        />
                    </EditableContext.Provider>
                </div>

                {isEditable && (
                    <Button buttonRef={submitButtonRef} buttonValue="Update" />
                )}
                {deleteModal && <Modal {...deleteModal} />}
            </form>
        </CommentContext.Provider>
    )
}

export default CommentContent
