import React, { FC } from "react"
import ContainedImage from "../ContainedImage/ContainedImage"

interface LikeCommentProps {
    likeComment(): void
}

const LikeComment: FC<LikeCommentProps> = ({ likeComment }) => {
    return (
        <ContainedImage
            src={require("../../images/icon-plus.svg")}
            alt="+"
            onClick={() => likeComment()}
        />
    )
}

export default LikeComment
