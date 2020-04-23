import * as React from 'react';
import { Fragment } from 'react';
import CommentsForm from './Comments';
import Signup from './SIGN_UP';



export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Fragment>
        {/* <h1>Hello, World!</h1> */}
        <Signup/>
        <CommentsForm/>
      </Fragment>
    );
  }
}
