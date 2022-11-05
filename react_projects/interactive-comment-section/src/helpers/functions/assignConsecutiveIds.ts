import { CommentProps } from "./../../components/Comment/Comment"
function assignConsecutiveIds(
    lastId: number,
    comments: CommentProps[]
): CommentProps[] {
    for (let i = 0, id = lastId + 1; i < comments?.length; i++, id++) {
        comments[i]!.id = `${id}`
    }

    return comments
}

export default assignConsecutiveIds
