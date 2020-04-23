import { NewsState, NewsItem, NewsActionType, INCREMENT_LIKE_COUNTER, SAVE_COMMENT } from "./types";

const initialState: NewsState = {
  newsItemList: [
    {
      newsId: 1,
      postingUserId: 1,
      newsTitle: 'News Item 1',
      newsContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat facilisis nulla, ac commodo nisi congue at. Phasellus tellus nulla, gravida eu efficitur et, tempor nec est. Etiam ut nunc lobortis, pellentesque turpis eget, maximus leo. Praesent a mi ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      newsLikesCount: 0,
      newsItemComment: ''
    },
    {
      newsId: 2,
      postingUserId: 1,
      newsTitle: 'News Item 2',
      newsContent: 'Donec leo lacus, sodales sit amet purus eu, varius imperdiet leo. Ut et pulvinar orci. Integer id faucibus libero, sed dictum mauris. Donec eu malesuada justo. Sed venenatis, orci nec tempus ornare, lectus mi gravida tellus, eget molestie lectus mauris ac nunc.',
      newsLikesCount: 0,
      newsItemComment: ''
    },
    {
      newsId: 3,
      postingUserId: 1,
      newsTitle: 'News Item 3',
      newsContent: 'Praesent tincidunt sapien eros, quis ultrices sem finibus vel. Nullam at finibus nibh. Cras molestie luctus nibh. Cras suscipit massa sed mi dictum pellentesque. Aliquam non erat non neque posuere gravida sit amet id turpis. Pellentesque dapibus pulvinar lectus consectetur laoreet. ',
      newsLikesCount: 0,
      newsItemComment: ''
    }
  ]
}

export function newsReducer( state = initialState, action: NewsActionType ): NewsState {
  //May be possible to simplify the code, but check this when it can be tested.
  let modNewsItem: NewsItem;
  switch (action.type) {
    case INCREMENT_LIKE_COUNTER:
      modNewsItem = state.newsItemList.filter(newsItem => newsItem.newsId === action.newsId)[0];
      modNewsItem.newsLikesCount = modNewsItem.newsLikesCount + 1;
      return {
        ...state,
        newsItemList: [ ...state.newsItemList.filter(newsItem => newsItem.newsId !== action.newsId), modNewsItem]
      }
    
    case SAVE_COMMENT:
      modNewsItem = state.newsItemList.filter(newsItem => newsItem.newsId === action.newsId)[0];
      modNewsItem.newsItemComment = action.comment;
      return {
        ...state,
        newsItemList: [...state.newsItemList.filter(newsItem => newsItem.newsId !== action.newsId), modNewsItem]
      }

    default:
      return state;      

  }
}