import { IComment } from "../../models/Comment/IComment"

interface ICommentsRepository {
    get(): Promise<IComment[] | undefined>
    create(comments: Promise<IComment[]>): void
    update(commentsToUpdate: Promise<IComment[]>): void
    delete(id: number): void
}

export default ICommentsRepository