import * as React from 'react';
import { Fragment } from 'react';


import Main from './Main/main';
import TextInput  from './TextInput';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Fragment>
        <h1>Hello, World!</h1>
        <TextInput></TextInput>

     <Main/>
      </Fragment>
    );
  }
}
