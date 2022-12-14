import React, { FC, useEffect, useReducer, useRef } from "react"

import { CommentsContext } from "../../context/CommentsContext"
import extractComments from "../../helpers/functions/extractComments"
import SequentialIdGenerator from "../../helpers/functions/idGenerator"
import { IComment } from "../../models/Comment/IComment"
import CommentLocalJsonRepository from "../../Repositories/Repositories/CommentLocalJsonRepository"
import { CommentProps } from "../Comment/Comment"
import Comments from "../Comments/Comments"
import styles from "./CommentsSection.module.scss"

const PostComment = React.lazy(() => import("../PostComment/PostComment"))

interface CommentSectionProps {}

export type CommentActions = "CREATE" | "DELETE"
export interface CommentAction {
  type: CommentActions
  payload: IComment[]
}

const CommentsSection: FC<CommentSectionProps> = () => {
  const [comments, dispatch] = useReducer(commentsReducer, [])
  function commentsReducer(
    state: IComment[],
    action: CommentAction
  ): IComment[] {
    switch (action.type) {
      case "CREATE": {
        action.payload.forEach(
          (newComment) => (newComment.id = SequentialIdGenerator.getId())
        )
        return [...(state || []), ...(action.payload || [])]
        break
      }
      case "DELETE": {
        //TODO: переделать чтобы можно было удалять несколько коментов

        const idToDelete = action.payload[0]?.id

        const filteredComments = state.filter(
          (comment) => comment.id !== idToDelete
        )

        for (let i = 0; i < filteredComments.length; i++) {
          //filter comment replies and wrap in promise
          ;(filteredComments[i] as CommentProps).replies = (async () =>
            (await filteredComments[i]?.replies)?.filter(
              (reply) => reply.id !== idToDelete
            ))()
        }
        return filteredComments || []
        break
      }
      default: {
        throw new Error("Such comment action does not exist")
      }
    }
    return state
  }

  const isFetchedRef = useRef(false)

  useEffect(() => {
    //FIXME: добавить dependency injection с Redux
    const commentLocalJsonRepository = new CommentLocalJsonRepository()
    !isFetchedRef.current &&
      commentLocalJsonRepository.get().then((data) => {
        dispatch({ type: "CREATE", payload: data || [] })
      })
    isFetchedRef.current = true
  }, [])

  return (
    <section
      aria-label="comments"
      className={styles["comments-section"]}
      style={{ marginBlock: "2rem" }}>
      <CommentsContext.Provider value={{ dispatch }}>
        <Comments comments={comments} />
        <React.Suspense>
          <PostComment />
        </React.Suspense>
      </CommentsContext.Provider>
    </section>
  )
}

export default CommentsSection
