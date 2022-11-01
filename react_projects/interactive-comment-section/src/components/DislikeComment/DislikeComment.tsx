import React, { FC } from "react"
import ContainedImage from "../ContainedImage/ContainedImage"

interface DislikeCommentProps {
    dislikeComment(): void
}

const DislikeComment: FC<DislikeCommentProps> = ({ dislikeComment }) => {
    return (
        <ContainedImage
            src={require("../../images/icon-minus.svg")}
            alt=""
            onClick={() => dislikeComment()}
        />
    )
}

export default DislikeComment
