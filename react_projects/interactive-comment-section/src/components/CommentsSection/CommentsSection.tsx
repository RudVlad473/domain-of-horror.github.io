import React, { FC, useEffect, useState } from "react"
import { CommentProps } from "../Comment/Comment"
import PostForm from "../PostForm/PostForm"
import styles from "./CommentsSection.module.scss"
import extractComments from "../../helpers/functions/extractComments"
import Comments from "../Comments/Comments"

import commentsData from "../../data/comments.json"
import { CommentsContext } from "../../context/CommentsContext"

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
    replies?: FetchedComment[]
}

export interface FetchedData {
    currentUser: FetchedUser
    comments: FetchedComment[]
}

const CommentsSection: FC<CommentSectionProps> = () => {
    const [comments, setComments] = useState<CommentProps[] | undefined>([])

    async function fetchCommentsFromLocalJSON() {
        const data = await extractComments(commentsData.comments)
        setComments((comments) => data)
    }

    function appendComments(comments: CommentProps[]): void {
        setComments((currentComments) => [...currentComments!, ...comments])
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
                value={{ appendComments, removeComment, lastCommentId: 0 }}>
                <Comments comments={comments} />
                <PostForm />
            </CommentsContext.Provider>
        </section>
    )
}

export default CommentsSection
