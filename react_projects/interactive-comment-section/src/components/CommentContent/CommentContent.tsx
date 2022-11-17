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
import { ActionTypes } from "../../models/ActionTypes"
import CommentBody, { CommentBodyProps } from "../CommentBody/CommentBody"
const LikeSection = React.lazy(() => import("../LikeSection/LikeSection"))
//import styles from "../Comment/Comment.module.scss"
import { LikeSectionProps } from "../LikeSection/LikeSection"
import Modal, { ModalProps } from "../Modal/Modal"
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
    const [article, setArticle] = useState<string | null>(null)
    const [deleteModal, setDeleteModal] = useState<ModalProps | null>(null)

    const submitButtonRef = useRef<HTMLButtonElement>(
        null
    ) as MutableRefObject<HTMLButtonElement>
    const editableTextAreaRef = useRef<HTMLTextAreaElement>(
        null
    ) as MutableRefObject<HTMLTextAreaElement>

    const { removeCommentOrReply } = useContext(CommentsContext)

    useEffect(() => {
        setArticle((_) => editableTextAreaRef?.current?.textContent)
    }, [editableTextAreaRef])

    function handleActions(e: React.MouseEvent<HTMLFormElement>) {
        const actionType = (e.target as HTMLDivElement).dataset["type"]
        const replyingTo = e.currentTarget.dataset["name"]

        switch (actionType) {
            case ActionTypes.REPLY: {
                setPostReply((currentPostReply) => replyingTo as string | null)

                break
            }
            case ActionTypes.EDIT: {
                setIsEditable((isCurrentlyEditable) => !isCurrentlyEditable)

                break
            }
            case ActionTypes.DELETE: {
                const currentCommentId = +e.currentTarget.id
                deleteModal
                    ? setDeleteModal(null)
                    : setDeleteModal({
                          onSubmit: () => {
                              removeCommentOrReply(currentCommentId)
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
            articleAfterEdit.textContent!
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
        setIsEditable((_) => false)
    }

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
            <form
                id={`${id}`}
                data-name={
                    commentBodyInfo.headerInfo.userDetails.userInfo.userName
                }
                className="comment"
                onClick={handleActions}
                onSubmit={handleSubmit}>
                <div className="comment__content">
                    <React.Suspense>
                        <LikeSection {...likesCount} />
                    </React.Suspense>
                    <EditableContext.Provider value={isEditable}>
                        <CommentBody
                            {...commentBodyInfo}
                            articleRef={editableTextAreaRef}
                        />
                    </EditableContext.Provider>
                </div>

                {isEditable && (
                    <Button
                        buttonRef={submitButtonRef}
                        buttonValue="Update"
                    />
                )}
                {deleteModal && <Modal {...deleteModal} />}
            </form>
        </CommentContext.Provider>
    )
}

export default CommentContent
