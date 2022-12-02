import React, { FC, useCallback, useContext, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

import { CommentContext } from "../../context/CommentContext"
import { UserContext } from "../../context/UserContext"
import styles from "./LikeSection.module.scss"

const LikeSection: FC<{ likesCount: number }> = ({ likesCount }) => {
    const { id: currentCommentId } = useContext(CommentContext)
    const { reactedCommentsIds } = useContext(UserContext)

    //const initialLikesCount = useRef(likesCount)
    const [score, setScore] = useState(likesCount)
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

            return currentReaction === undefined
                ? score + 1
                : currentReaction === "+"
                ? score - 1
                : score + 1

            // return {
            //     likesCount:
            //         currentReaction === undefined
            //             ? score.likesCount + 1
            //             : currentReaction === "+"
            //             ? score.likesCount - 1
            //             : score.likesCount + 1,
            // }
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

            return currentReaction === undefined
                ? score - 1
                : currentReaction === "-"
                ? score + 1
                : score - 1
            // return currentReaction === undefined
            //     ? score.likesCount - 1
            //     : currentReaction === "-"
            //     ? score.likesCount + 1
            //     : score.likesCount - 1
        })
    }, [reactedCommentsIds, currentCommentId])

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
                {score.toString().length > maxLikesScore ? "99+" : score}
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
