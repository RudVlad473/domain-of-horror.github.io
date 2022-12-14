import React, {
  FC,
  MutableRefObject,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState
} from "react"

import { CommentContext } from "../../context/CommentContext"
import { CommentsContext } from "../../context/CommentsContext"
import { EditableContext } from "../../context/EditableContext"
import validateCommentInput, {
  MessageStates
} from "../../helpers/functions/validateCommentInput"
import { ActionTypes } from "../../models/Action/ActionTypes"
import Comment from "../../models/Comment/Comment"
import { CommentId, IComment } from "../../models/Comment/IComment"
import { ICommentContent } from "../../models/CommentContent/ICommentContent"
import { ReplyingTo } from "../../models/Reply/IReply"
import CommentBody from "../CommentBody/CommentBody"
import Modal, { ModalProps } from "../Modal/Modal"
import Button from "../UI/Button/Button"

const LikeSection = React.lazy(() => import("../LikeSection/LikeSection"))

export interface CommentContentProps {
  comment: ICommentContent
  //dispatchReplies: React.Dispatch<ReplyAction>
  setPostReply: React.Dispatch<React.SetStateAction<string | null>>
}

interface ActionType {
  commentId: CommentId
  replyingTo: ReplyingTo
}

interface Action {
  type: ActionTypes
  payload: ActionType | undefined
}

const CommentContent: FC<CommentContentProps> = ({
  comment,

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

  const [state, dispatchActions] = useReducer(actionsReducer, {
    commentId: 0,
    replyingTo: "",
  })

  function actionsReducer(state: ActionType, action: Action): ActionType {
    try {
      switch (action.type) {
        case ActionTypes.REPLY: {
          setPostReply(() => state.replyingTo)

          break
        }
        case ActionTypes.EDIT: {
          setIsEditable((isCurrentlyEditable) => !isCurrentlyEditable)

          break
        }
        case ActionTypes.DELETE: {
          const { commentId } = state
          const commentToDelete = new Comment({} as IComment)
          commentToDelete.id = commentId

          deleteModal
            ? setDeleteModal(null)
            : setDeleteModal({
                onSubmit: () => {
                  dispatchComments({
                    type: "DELETE",
                    payload: [commentToDelete],
                  })
                  setDeleteModal(null)
                },
                onSubmitButton: { buttonValue: "YES, DELETE" },

                onDecline: () => {
                  setDeleteModal(null)
                },
                onDeclineButton: { buttonValue: "NO, CANCEL" },

                header: "Delete comment",
                descr:
                  "Are you sure you want to delete this comment? This will remove the comment and can't be undone.",
              })
        }
      }
    } catch {
      console.log(
        "Probably, state of actionReducer was expected to be something else"
      )
    }
    return state
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
        onClick={(e) => {
          const actionType = (e.target as HTMLDivElement).dataset["type"] as
            | ActionTypes
            | undefined
          const replyingTo = e.currentTarget.dataset["name"]
          const commentId = parseInt(e.currentTarget.id)

          if (!actionType || !replyingTo || !commentId) {
            throw new Error(
              "It seems like comment doesn't have required information. Try to reload the page."
            )
          }

          dispatchActions({
            type: actionType,
            payload: { commentId, replyingTo },
          })
        }}
        onSubmit={handleSubmit}>
        <div className="comment__content">
          <React.Suspense>
            <LikeSection likesCount={comment.likesCount} />
          </React.Suspense>
          <EditableContext.Provider value={isEditable}>
            <CommentBody {...comment} articleRef={editableTextAreaRef} />
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
