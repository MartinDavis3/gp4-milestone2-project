export interface NewsItem {
  newsId: number,
  postingUserId: number,
  newsTitle: string,
  newsContent: string,
  newsLikesCount: number,
  newsItemComment: string
}

export interface NewsState {
  newsItemList: NewsItem []
}

export const INCREMENT_LIKE_COUNTER = 'INCREMENT_LIKE_COUNTER';
export const SAVE_COMMENT = 'SAVE_COMMENT';

interface IncrementLikeCounter {
  type: typeof INCREMENT_LIKE_COUNTER
  newsId: number
}

interface SaveComment {
  type: typeof SAVE_COMMENT
  newsId: number
  comment: string
}

export type NewsActionType = IncrementLikeCounter | SaveComment
