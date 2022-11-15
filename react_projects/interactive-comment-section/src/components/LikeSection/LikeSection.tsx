import React, { FC, useCallback, useContext, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { CommentContext } from "../../context/CommentContext"
import { UserContext } from "../../context/UserContext"
import decideReaction from "../../helpers/functions/decideReaction"
import styles from "./LikeSection.module.scss"

export interface LikeSectionProps {
    likesCount: number
}

const LikeSection: FC<LikeSectionProps> = ({ likesCount }) => {
    const { id: currentCommentId } = useContext(CommentContext)
    const { reactedCommentsIds } = useContext(UserContext)

    const [score, setScore] = useState<LikeSectionProps>({
        likesCount,
    })
    const maxLikesScore = 2

    const likeComment = useCallback(() => {
        const currentReaction = reactedCommentsIds.get(currentCommentId)
        setScore((score) => {
            const newReaction = currentReaction
                ? currentReaction === "+"
                    ? score.likesCount - 1
                    : score.likesCount + 1
                : score.likesCount + 1

            reactedCommentsIds.set(
                currentCommentId,
                score.likesCount > newReaction ? "-" : "+"
            )

            return { likesCount: newReaction }
        })
    }, [reactedCommentsIds])
    const dislikeComment = useCallback(() => {
        const currentReaction = reactedCommentsIds.get(currentCommentId)
        setScore((score) => {
            const newReaction = currentReaction
                ? currentReaction === "+"
                    ? score.likesCount + 1
                    : score.likesCount - 1
                : score.likesCount - 1

            reactedCommentsIds.set(
                currentCommentId,
                score.likesCount < newReaction ? "-" : "+"
            )

            return { likesCount: newReaction }
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

            <div className={styles["like-section__score"]}>
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
