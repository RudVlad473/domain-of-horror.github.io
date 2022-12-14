import { ReactNode } from "react"

import { IUser } from "../User/IUser"
import { ICommentContent } from "./ICommentContent"

export class CommentContent implements ICommentContent {
  id: number
  likesCount: number
  article: ReactNode
  when: string
  user: IUser

  constructor({
    id = 0,
    likesCount = 0,
    article = undefined,
    when = "",
    user = { avatarUrl: "", userName: "" },
  }: ICommentContent) {
    this.id = id
    this.likesCount = likesCount
    this.article = article
    this.when = when
    this.user = user
  }
}
