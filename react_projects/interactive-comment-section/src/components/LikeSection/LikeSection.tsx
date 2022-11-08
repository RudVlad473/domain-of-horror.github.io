import React, { FC, useCallback, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import ContainedImage from "../ContainedImage/ContainedImage"
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
        () => setScore((score) => ({ likesCount: score.likesCount + 1 })),
        []
    )

    const dislikeComment = useCallback(
        () => setScore((score) => ({ likesCount: score.likesCount - 1 })),
        []
    )

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
