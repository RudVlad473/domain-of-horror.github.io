import React, {
    FC,
    useEffect,
    useLayoutEffect,
    useReducer,
    useRef,
} from "react"

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
    comments: CommentProps[]
}

const CommentsSection: FC<CommentSectionProps> = () => {
    const idGeneratorRef = useRef<Generator<number, void, unknown>>(
        idGenerator(0)
    )
    const [comments, dispatch] = useReducer(commentsReducer, [])
    const isFetchedRef = useRef(false)

    function commentsReducer(
        state: CommentProps[],
        action: CommentAction
    ): CommentProps[] {
        switch (action.type) {
            case "CREATE": {
                action.comments.forEach(
                    (newComment) =>
                        (newComment.id = idGeneratorRef.current.next()
                            .value as number)
                )
                return state.concat(action.comments)
                break
            }
            case "DELETE": {
                //TODO: переделать чтобы можно было удалять несколько коментов
                const idToDelete = action.comments[0]?.id

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

    // async function fetchCommentsFromLocalJSON() {
    //     const data = await extractComments(commentsData.comments)

    //     dispatch({ type: "CREATE", comments: data || [] })
    // }

    useEffect(() => {
        //fetchCommentsFromLocalJSON()
        !isFetchedRef.current &&
            extractComments(commentsData.comments).then((data) => {
                dispatch({ type: "CREATE", comments: data || [] })
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
