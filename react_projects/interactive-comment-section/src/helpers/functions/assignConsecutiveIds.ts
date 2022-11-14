import { CommentProps } from "./../../components/Comment/Comment"
function assignConsecutiveIds(
    idGenerator: Generator<number, void, unknown>,
    comments: CommentProps[]
): CommentProps[] {
    comments.forEach((comment) => {
        comment.id = idGenerator.next().value!
    })

    return comments
}

export default assignConsecutiveIds
