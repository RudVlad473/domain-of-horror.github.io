import { CommentContent } from "../CommentContent/CommentContent"
import { IReply } from "./IReply"

export class Reply extends CommentContent implements IReply {
  replyingTo: string

  constructor({
    id = 0,
    likesCount = 0,
    article = undefined,
    when = "",
    user = { avatarUrl: "", userName: "" },
    replyingTo = "",
  }: IReply) {
    super({ id, likesCount, article, when, user })
    this.replyingTo = replyingTo
  }
}
