import React, { FC, useCallback, useContext, useEffect, useRef } from "react"

import { UserContext } from "../../context/UserContext"
import validateCommentInput, {
  MessageStates
} from "../../helpers/functions/validateCommentInput"
import { Reply } from "../../models/Reply/Reply"
import { ReplyAction } from "../Comment/Comment"

//import Reply, { ReplyProps } from "../Reply/Reply"

const PostForm = React.lazy(() => import("../PostForm/PostForm"))

export interface PostReplyProps {
  replyingTo: string
  dispatchReplies: React.Dispatch<ReplyAction>
  setPostReply: React.Dispatch<React.SetStateAction<string | null>>
}

const PostReply: FC<PostReplyProps> = ({
  replyingTo,
  dispatchReplies,
  setPostReply,
}) => {
  const { avatarUrl, userName } = useContext(UserContext)

  const commentInputRef = useRef<HTMLTextAreaElement>(
    null
  ) as React.MutableRefObject<HTMLTextAreaElement>

  const submitButtonRef = useRef<HTMLButtonElement>(
    null
  ) as React.MutableRefObject<HTMLButtonElement>

  const addReply = useCallback(() => {
    const text = commentInputRef?.current.value
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

    const newReply = new Reply({
      id: 0,
      user: { avatarUrl, userName },
      when: "today",
      article: text,
      likesCount: 0,
      replyingTo,
    })

    setPostReply(() => null)
    //setLocalReplies((currentReplies) => [...(currentReplies || []), newReply])
    dispatchReplies({ type: "REPLY", payload: [newReply] })

    commentInputRef.current.value = ""
  }, [avatarUrl, dispatchReplies, replyingTo, setPostReply, userName])

  function clickSubmitOnButtonPush(e: KeyboardEvent) {
    e.stopImmediatePropagation()
    if (e.key == "Enter") {
      submitButtonRef?.current?.click()
    }
  }

  useEffect(() => {
    window.addEventListener("keypress", clickSubmitOnButtonPush)

    return () => {
      window.removeEventListener("keypress", clickSubmitOnButtonPush)
    }
  }, [])

  return (
    <React.Suspense>
      <PostForm
        key={replyingTo}
        textAreaRef={commentInputRef}
        onFormSubmit={addReply}
        buttonValue="Reply"
        buttonRef={submitButtonRef}
      />
    </React.Suspense>
  )
}

export default PostReply
