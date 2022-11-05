import React, { FC } from "react"
import styles from "./ContainedImage.module.scss"
import { LazyLoadImage } from "react-lazy-load-image-component"


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
            <LazyLoadImage
                src={src}
                alt={alt || "img"}
                className={styles["container__image"]}
                style={{ maxWidth }}
            />
        </div>
    )
}

export default ContainedImage
