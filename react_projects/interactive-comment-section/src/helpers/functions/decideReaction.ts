import { CommentId, ReactedCommentsIds } from "../../context/UserContext"

export type ReactionDecision = "default" | "+" | "-"

function decideReaction(
    id: CommentId,
    reactedCommentsIds: ReactedCommentsIds
): ReactionDecision {
    const commentReaction = reactedCommentsIds.get(id)

    if (commentReaction) {
        return commentReaction === "+" ? "-" : commentReaction
    } else {
        return "default"
    }
}

export default decideReaction
