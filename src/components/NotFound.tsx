import * as React from 'react';
import { Fragment } from 'react';

export interface INotFoundProps {
}

export default class NotFound extends React.Component<INotFoundProps> {
  public render() {
    return (
      <Fragment>
        Invalid URL Provided / Page Not Found
      </Fragment>
    );
  }
}
