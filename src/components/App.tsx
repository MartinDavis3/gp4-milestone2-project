import * as React from 'react';
import { Fragment } from 'react';
import Main from './Main/main';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Fragment>
     <Main/>
      </Fragment>
    );
  }
}
