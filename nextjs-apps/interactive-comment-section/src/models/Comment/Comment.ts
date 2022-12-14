import { ReplyProps } from "../../components/Reply/Reply"
import extractReplies from "../../helpers/functions/extractReplies"
import { CommentContent } from "../CommentContent/CommentContent"
import { FetchedComment } from "./../FetchedComment/IFetchedComment"
import { IComment } from "./IComment"

class Comment extends CommentContent implements IComment {
  replies: Promise<ReplyProps[] | undefined>

  constructor({
    id = 0,
    likesCount = 0,
    article = undefined,
    when = "",
    user = { avatarUrl: "", userName: "" },
    replies = Promise.resolve<ReplyProps[] | undefined>(undefined),
  }: IComment) {
    super({ id, likesCount, article, when, user })
    this.replies = replies
  }

  static getNullComment(): IComment {
    return new Comment({
      id: 0,
      likesCount: 0,
      article: undefined,
      when: "",
      user: { avatarUrl: "", userName: "" },
      replies: Promise.resolve<ReplyProps[] | undefined>(undefined),
    })
  }

  //TODO: Apply adapter pattern fetched comment => comment
  static extractCommentFromFetchedComment(fetchedComment: FetchedComment) {
    return new Comment({
      id: fetchedComment.id,
      likesCount: fetchedComment.score,
      article: fetchedComment.content,
      when: fetchedComment.createdAt,
      user: {
        userName: fetchedComment.user.username,
        avatarUrl: fetchedComment.user.image.png,
      },
      replies: extractReplies(fetchedComment.replies),
    })
  }
}

export default Comment
