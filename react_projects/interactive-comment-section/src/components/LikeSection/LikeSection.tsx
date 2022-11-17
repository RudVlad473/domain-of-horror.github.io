import React, { FC, useCallback, useContext, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { CommentContext } from "../../context/CommentContext"
import { UserContext } from "../../context/UserContext"
import styles from "./LikeSection.module.scss"

export interface LikeSectionProps {
    likesCount: number
}

const LikeSection: FC<LikeSectionProps> = ({ likesCount }) => {
    const { id: currentCommentId } = useContext(CommentContext)
    const { reactedCommentsIds } = useContext(UserContext)

    //const initialLikesCount = useRef(likesCount)
    const [score, setScore] = useState<LikeSectionProps>({
        likesCount
    })
    //const [reaction, setReaction] = useState<Reaction>(undefined)

    const maxLikesScore = 2

    const likeComment = useCallback(() => {
        const currentReaction = reactedCommentsIds.get(currentCommentId)
        setScore((score) => {
            reactedCommentsIds.set(
                currentCommentId,
                currentReaction === undefined
                    ? "+"
                    : currentReaction === "+"
                    ? undefined
                    : undefined
            )

            return {
                likesCount:
                    currentReaction === undefined
                        ? score.likesCount + 1
                        : currentReaction === "+"
                        ? score.likesCount - 1
                        : score.likesCount + 1
            }
        })
    }, [reactedCommentsIds, currentCommentId])
    const dislikeComment = useCallback(() => {
        const currentReaction = reactedCommentsIds.get(currentCommentId)
        setScore((score) => {
            reactedCommentsIds.set(
                currentCommentId,
                currentReaction === undefined
                    ? "-"
                    : currentReaction === "-"
                    ? undefined
                    : undefined
            )

            return {
                likesCount:
                    currentReaction === undefined
                        ? score.likesCount - 1
                        : currentReaction === "-"
                        ? score.likesCount + 1
                        : score.likesCount - 1
            }
        })
    }, [reactedCommentsIds])

    return (
        <div className={styles["like-section"]}>
            <figure onClick={likeComment}>
                <LazyLoadImage
                    src={require("../../images/icon-plus.svg")}
                    alt="+"
                />
            </figure>

            <div
                className={`${styles["like-section__score"]} ${
                    reactedCommentsIds.get(currentCommentId) &&
                    (reactedCommentsIds.get(currentCommentId) === "-"
                        ? styles["like-section__score--disliked"]
                        : styles["like-section__score--liked"])
                } `}>
                {score.likesCount.toString().length > maxLikesScore
                    ? "99+"
                    : score.likesCount}
            </div>

            <figure onClick={dislikeComment}>
                <LazyLoadImage
                    src={require("../../images/icon-minus.svg")}
                    alt="-"
                />
            </figure>
        </div>
    )
}

export default LikeSection
