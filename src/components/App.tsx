import * as React from 'react';
import { Fragment } from 'react';
import Profile from './Profile/Profile';



export interface IAppProps {

}


export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Fragment>
<Profile/>

        <h1>Hello, World!</h1>

      </Fragment>
    );
  }
}
