import React, { FC, useEffect, useMemo, useState } from "react"
import { CommentProps } from "../Comment/Comment"

import styles from "./CommentsSection.module.scss"
import extractComments from "../../helpers/functions/extractComments"
import Comments from "../Comments/Comments"
import commentsData from "../../data/comments.json"
import { CommentsContext } from "../../context/CommentsContext"
import assignConsecutiveIds from "../../helpers/functions/assignConsecutiveIds"
const PostComment = React.lazy(() => import("../PostComment/PostComment"))

interface CommentSectionProps {}

export interface FetchedImage {
    png: string
    webp: string
}

export interface FetchedUser {
    image: FetchedImage
    username: string
}
export interface FetchedComment {
    id: number
    content: string
    createdAt: string
    score: number
    user: FetchedUser
    replies?: FetchedReply[]
}

export interface FetchedReply extends FetchedComment {
    replyingTo: string
}

export interface FetchedData {
    currentUser: FetchedUser
    comments: FetchedComment[]
}

const CommentsSection: FC<CommentSectionProps> = () => {
    const [comments, setComments] = useState<CommentProps[] | undefined>([])

    const [lastId, setLastId] = useState<number>(0)

    async function fetchCommentsFromLocalJSON() {
        const data = await extractComments(commentsData.comments)

        let lastIdCount = lastId
        await data?.forEach(async (comment) => {
            lastIdCount++
            comment.id = `${lastIdCount}`
            ;(await comment.replies)?.forEach((reply) => {
                lastIdCount++
                reply.id = `${lastIdCount}`
            })
        })

        setLastId((_) => lastIdCount)
        setComments((_) => data)
    }

    // function appendExistingComment(id: number, newComment: CommentProps): void {
    //     const indexOfExistingComment = comments?.findIndex(
    //         (comments) => +comments.id == id
    //     )!

    //     newComment.id = `${lastId + 1}`

    //     setLastId((lastId) => lastId + 1)
    //     setComments((currentComments) => {
    //         const newComments = [...currentComments!]
    //         newComments[indexOfExistingComment] = {
    //             ...newComments[indexOfExistingComment],
    //             ...newComment,
    //         }

    //         return [...newComments!]
    //     })
    // }

    function appendComments(comments: CommentProps[]) {
        setComments((currentComments) => [
            ...(currentComments || []),
            ...assignConsecutiveIds(lastId, comments),
        ])
        setLastId((lastId) => lastId + comments.length)
    }

    function removeComment(id: number): void {}

    useEffect(() => {
        fetchCommentsFromLocalJSON()
    }, [])

    return (
        <section
            aria-label="comments"
            className={styles["comments-section"]}
            style={{ marginBlock: "2rem" }}>
            <CommentsContext.Provider
                value={{
                    appendComments,
                    removeComment,
                    lastId: lastId,
                }}>
                <Comments comments={comments} />
                <React.Suspense>
                    <PostComment />
                </React.Suspense>
            </CommentsContext.Provider>
        </section>
    )
}

export default CommentsSection
