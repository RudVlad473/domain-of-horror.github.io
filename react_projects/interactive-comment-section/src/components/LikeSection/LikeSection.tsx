import React, { FC, useCallback, useState } from "react"
import ContainedImage from "../ContainedImage/ContainedImage"
import DislikeComment from "../DislikeComment/DislikeComment"
import LikeComment from "../LikeComment/LikeComments"
import styles from "./LikeSection.module.scss"

export interface LikeSectionProps {
    likesCount: number
}

const LikeSection: FC<LikeSectionProps> = ({ likesCount }) => {
    const [score, setScore] = useState<LikeSectionProps>({
        likesCount,
    })
    const maxLikesScore = 2

    const likeComment = useCallback(
        () =>
            setScore((score) => ({
                likesCount: score.likesCount + 1,
            })),
        []
    )

    const dislikeComment = useCallback(
        () => setScore((score) => ({ likesCount: score.likesCount - 1 })),
        []
    )

    return (
        <div className={styles["like-section"]}>
            <LikeComment likeComment={likeComment} />

            <div className={styles["like-section__score"]}>
                {score.likesCount.toString().length > maxLikesScore
                    ? "99+"
                    : score.likesCount}
            </div>

            <DislikeComment dislikeComment={dislikeComment} />
        </div>
    )
}

export default LikeSection
