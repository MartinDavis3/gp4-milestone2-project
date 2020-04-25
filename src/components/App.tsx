import * as React from 'react';
import { Fragment } from 'react';
import Register from './Signup'


import Main from './Main/main';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Fragment>
        <h1>Hello, World!</h1>

        <Register />

     <Main/>
      </Fragment>
    );
  }
}
