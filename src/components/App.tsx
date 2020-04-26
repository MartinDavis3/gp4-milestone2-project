import * as React from 'react';
import { Fragment } from 'react';

import { Route, Switch } from "react-router-dom";
import NotFound from './NotFound';
import Main from './Main/main';
import P2profile from './P2profile/P2profile';
import P3newsfeed from './P3newsfeed/P3newsfeed';
import P4message from './P4message/P4message';


export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Fragment>

        <Switch>
          <Route exact path='/Main/main' component={Main} />
          <Route path='/P2profile/P2profile/:id' component={P2profile} />
          <Route path='/P3newsfeed/P3newsfeed' component={P3newsfeed} />
          <Route path='/P4message/P4message' component={P4message} />
          <Route component={NotFound} />
        </Switch>    
      </Fragment>
    );
  }
}
