import * as React from 'react';
import Login from './login';
import Mainheader from './mainheader';
import Signup from './signup';

export interface IMainProps {
}

export default class Main extends React.Component<IMainProps> {
  public render() {
    return (

  <React.Fragment>
<Mainheader/>
<br/>
<br/>

<Login />
<br/>
<br/>


<Signup/>
<br/>
<br/>

</React.Fragment>
    );
  }
}
