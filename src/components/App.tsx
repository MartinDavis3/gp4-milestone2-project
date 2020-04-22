import * as React from 'react';
import { Fragment } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import { Home } from './Home';
import Main from './Main/main';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Fragment>
        {/* <Main/> */}
    {/* <Router>
        <ul>
          <li><Link to="/profile/:userId">Home</Link></li>
          <li><Link to="/profile/:editeprofile">Profile</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home}/>

        </Switch>
      </Router> */}
      </Fragment>
    );
  }
}
