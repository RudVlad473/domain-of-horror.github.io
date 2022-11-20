import React, { FC, useEffect, useReducer, useRef } from "react"

import { CommentsContext } from "../../context/CommentsContext"
import commentsData from "../../data/comments.json"
import extractComments from "../../helpers/functions/extractComments"
import idGenerator from "../../helpers/functions/idGenerator"
import { CommentProps } from "../Comment/Comment"
import Comments from "../Comments/Comments"
import styles from "./CommentsSection.module.scss"

const PostComment = React.lazy(() => import("../PostComment/PostComment"))

interface CommentSectionProps {}

export type CommentActions = "CREATE" | "DELETE"
export interface CommentAction {
    type: CommentActions
    payload: CommentProps[]
}

const CommentsSection: FC<CommentSectionProps> = () => {
    //const [comments, setComments] = useState<>([])
    const idGeneratorRef = useRef<Generator<number, void, unknown>>(
        idGenerator(0)
    )
    const [comments, dispatch] = useReducer(commentsReducer, [])

    function commentsReducer(
        state: CommentProps[],
        action: CommentAction
    ): CommentProps[] {
        switch (action.type) {
            case "CREATE": {
                action.payload.forEach(
                    (newComment) =>
                        (newComment.id = idGeneratorRef.current.next()
                            .value as number)
                )

                return comments.concat(action.payload)
                break
            }
            case "DELETE": {
                const idToDelete = action.payload[0]?.id

                const filteredComments = state.filter(
                    (comment) => comment.id !== idToDelete
                )

                for (let i = 0; i < filteredComments.length; i++) {
                    //filter comment replies and wrap in promise
                    ;(filteredComments[i] as CommentProps).replies =
                        (async () =>
                            (await filteredComments[i]?.replies)?.filter(
                                (reply) => reply.id !== idToDelete
                            ))()
                }
                return filteredComments || []
                break
            }
            default: {
                throw new Error("Such action does not exist")
            }
        }
    }

    //const [lastId, setLastId] = useState<number>(0)

    async function fetchCommentsFromLocalJSON() {
        const data = await extractComments(commentsData.comments)

        await data?.forEach(async (comment) => {
            comment.id = idGeneratorRef.current.next().value as number
            ;(await comment.replies)?.forEach((reply) => {
                reply.id = idGeneratorRef.current.next().value as number
            })
        })
        dispatch({ type: "CREATE", payload: data || [] })
    }

    useEffect(() => {
        fetchCommentsFromLocalJSON()
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
