import * as React from 'react';
import { Fragment } from 'react';
import { Component } from 'react';
import NewsItemsList from './NewsItemsList';
import Comments from './Savecomment';

export interface IP3newsfeedProps {
}

export default class P3newsfeed extends Component<IP3newsfeedProps> {
  public render() {
    return (
      <Fragment>
        Page 3. Newsfeed
        <NewsItemsList/>
        <Comments/>
      </Fragment>
    );
  }
}
