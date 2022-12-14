import React, { FC, useEffect, useReducer, useState } from "react"

import SequentialIdGenerator from "../../helpers/functions/idGenerator"
import { ICommentContent } from "../../models/CommentContent/ICommentContent"
import { IReply } from "../../models/Reply/IReply"
import { UserName } from "../../models/User/IUser"
import CommentContent from "../CommentContent/CommentContent"
import NoComments from "../NoComments/NoComments"
import PostReply from "../PostReply/PostReply"
import repliesStyles from "../Replies/Replies.module.scss"

export interface CommentProps extends ICommentContent {
  replies: Promise<IReply[] | undefined>
}

export type ReplyActions = "REPLY"
export interface ReplyAction {
  type: ReplyActions
  payload: IReply[] | undefined
}

const Comment: FC<CommentProps> = (comment) => {
  const [replies, dispatch] = useReducer(repliesReducer, undefined)

  function repliesReducer(
    state: IReply[] | undefined,
    action: ReplyAction
  ): IReply[] | undefined {
    switch (action.type) {
      case "REPLY": {
        action.payload?.forEach((reply) => {
          reply.id = SequentialIdGenerator.getId()
        })
        return [...(state || []), ...(action.payload || [])]
        break
      }
      default: {
        throw new Error("Such reply action does not exist")
      }
    }
    return state
  }

  const [postReply, setPostReply] = useState<UserName | null>(null)

  // useEffect(() => {
  //   console.log("My lonely mount")
  // }, [])

  useEffect(() => {
    comment.replies.then(replies => {
      dispatch({ type: "REPLY", payload: replies })
    })
  }, [comment.replies])

  return (
    <>
      <CommentContent
        comment={comment}
        // dispatchReplies={dispatch}
        setPostReply={setPostReply}
      />
      <React.Suspense fallback={<NoComments />}>
        {replies?.length ? (
          <section
            className={repliesStyles["replies-section"]}
            aria-label="replies">
            <div
              className={
                repliesStyles["replies-section__left-separator"]
              }></div>

            <div className={repliesStyles["replies"]}>
              {replies?.map((reply) => (
                <CommentContent
                  key={reply.id}
                  comment={reply}
                  // dispatchReplies={dispatch}
                  setPostReply={setPostReply}
                />
              ))}
            </div>
          </section>
        ) : undefined}
        {postReply && (
          <PostReply
            replyingTo={postReply}
            dispatchReplies={dispatch}
            setPostReply={setPostReply}
          />
        )}
      </React.Suspense>
    </>
  )
}

export default Comment
