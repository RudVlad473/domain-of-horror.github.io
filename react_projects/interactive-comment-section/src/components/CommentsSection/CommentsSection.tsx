import React, { FC, useEffect, useState } from "react"
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
            comment.id = lastIdCount
            ;(await comment.replies)?.forEach((reply) => {
                lastIdCount++
                reply.id = lastIdCount
            })
        })

        setLastId((_) => lastIdCount)
        setComments((_) => data)
    }

    async function appendComments(comments: CommentProps[]) {
        setComments((currentComments) => [
            ...(currentComments || []),
            ...assignConsecutiveIds(lastId, comments),
        ])
        setLastId((lastId) => lastId + comments.length)
    }

    async function removeCommentOrReply(id: number): Promise<void> {
        setComments((currentComments) => {
            const filteredComments =
                currentComments?.filter((comment) => comment.id !== id) || []

            
            for (let i = 0; i < filteredComments.length; i++) {
                //filter comment replies and wrap in promise
                filteredComments[i]!.replies = (async () =>
                    (await filteredComments[i]?.replies)?.filter(
                        (reply) => reply.id !== id
                    ))()
            }
            return filteredComments
        })
    }

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
                    removeCommentOrReply,
                    lastId,
                }}>
                <Comments comments={comments} />
                <React.Suspense>
                    <PostComment appendComments={appendComments} />
                </React.Suspense>
            </CommentsContext.Provider>
        </section>
    )
}

export default CommentsSection
