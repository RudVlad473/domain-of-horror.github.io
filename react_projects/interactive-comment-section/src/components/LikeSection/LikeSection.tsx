import React, { FC, useCallback, useState } from "react"
import ContainedImage from "../ContainedImage/ContainedImage"
import DislikeComment from "../DislikeComment/DislikeComment"
import LikeComment from "../LikeComment/LikeComments"
import styles from "./LikeSection.module.scss"

const LikeSection: FC<number> = ({ likesCount }) => {
    const [likesScore, setLikesScore] = useState<number>(likesCount)
    const maxLikesScore = 2

    const likeComment = useCallback(
        () => setLikesScore((likesScore) => likesScore + 1),
        []
    )

    const dislikeComment = useCallback(
        () => setLikesScore((likesScore) => likesScore - 1),
        []
    )

    return (
        <div className={styles["like-section"]}>
            <LikeComment likeComment={likeComment} />

            <div className={styles["like-section__score"]}>
                {likesScore.toString().length > maxLikesScore
                    ? "99+"
                    : likesScore}
            </div>

            <DislikeComment dislikeComment={dislikeComment} />
        </div>
    )
}

export default LikeSection
