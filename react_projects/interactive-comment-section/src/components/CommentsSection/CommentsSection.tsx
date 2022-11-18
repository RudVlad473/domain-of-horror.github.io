import React, { FC, useEffect, useRef, useState } from "react"
import { CommentProps } from "../Comment/Comment"

import styles from "./CommentsSection.module.scss"
import extractComments from "../../helpers/functions/extractComments"
import Comments from "../Comments/Comments"
import commentsData from "../../data/comments.json"
import { CommentsContext } from "../../context/CommentsContext"
import assignConsecutiveIds from "../../helpers/functions/assignConsecutiveIds"
import idGenerator from "../../helpers/functions/idGenerator"
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

    //const [lastId, setLastId] = useState<number>(0)
    const idGeneratorRef = useRef<Generator<number, void, unknown>>(
        idGenerator(0)
    )

    async function fetchCommentsFromLocalJSON() {
        const data = await extractComments(commentsData.comments)

        await data?.forEach(async (comment) => {
            comment.id = idGeneratorRef.current.next().value as number
            ;(await comment.replies)?.forEach((reply) => {
                reply.id = idGeneratorRef.current.next().value as number
            })
        })
        setComments(() => data)
    }

    async function appendComments(comments: CommentProps[]) {
        setComments((currentComments) => [
            ...(currentComments || []),
            ...assignConsecutiveIds(idGeneratorRef.current, comments)
        ])
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
            <CommentsContext.Provider value={{ removeCommentOrReply }}>
                <Comments comments={comments} />
                <React.Suspense>
                    <PostComment appendComments={appendComments} />
                </React.Suspense>
            </CommentsContext.Provider>
        </section>
    )
}

export default CommentsSection
