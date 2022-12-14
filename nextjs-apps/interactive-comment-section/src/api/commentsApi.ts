import commentsData from "../data/comments.json"
import { FetchedComment } from "./../models/FetchedComment/IFetchedComment"

async function getCommentsFromLocalJson(): Promise<FetchedComment[]> {
  return commentsData.comments
}

export default getCommentsFromLocalJson
