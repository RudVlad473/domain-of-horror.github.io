import React, { FC } from "react"
import styles from "./ContainedImage.module.scss"

interface ContainedImageProps {
    src: string
    alt?: string | undefined
    maxWidth?: string
}

const ContainedImage: FC<ContainedImageProps> = ({
    src,
    alt,
    maxWidth = "2rem",
    ...props
}) => {
    return (
        <div
            className={styles["container"]}
            {...props}>
            <img
                src={src}
                alt={alt || "img"}
                className={styles["container__image"]}
                style={{ maxWidth }}
            />
        </div>
    )
}

export default ContainedImage
