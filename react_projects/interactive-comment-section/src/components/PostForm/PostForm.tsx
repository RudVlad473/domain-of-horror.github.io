import React, { FC, FormEvent, useContext } from "react"
import { UserContext } from "../../context/context"
import CommentArea from "../CommentArea/CommentArea"
import ContainedImage from "../ContainedImage/ContainedImage"
import styles from "./PostForm.module.scss"

const PostForm: FC = () => {
    const { avatarUrl } = useContext(UserContext)

    function submitHandler(e: FormEvent) {
        e.preventDefault()
    }

    return (
        <form
            className={styles["post-form"]}
            onSubmit={submitHandler}>
            <ContainedImage
                src={avatarUrl}
                alt={"You"}
                maxWidth={"2.5rem"}
            />
            <CommentArea  />
            <button
                type="submit"
                className={styles["post-form__submit-button"]}>
                SEND
            </button>
        </form>
    )
}

export default PostForm
