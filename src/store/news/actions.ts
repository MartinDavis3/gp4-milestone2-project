import { NewsActionType, INCREMENT_LIKE_COUNTER, SAVE_COMMENT} from "./types";

export function incrementLikeCounter( newsId: number ): NewsActionType {
  return {
    type: INCREMENT_LIKE_COUNTER,
    newsId: newsId
  }
}

export function saveComment(newsId: number, comment: string): NewsActionType {
  return {
    type: SAVE_COMMENT,
    newsId: newsId,
    comment: comment
  }
}