import * as React from 'react';
import NewsItemsList from './NewsItemsList';

export interface INewsFeedProps {
}

export default class NewsFeed extends React.Component<INewsFeedProps> {
  public render() {
    return (
      <div>
        <NewsItemsList/>
      </div>
    );
  }
}
