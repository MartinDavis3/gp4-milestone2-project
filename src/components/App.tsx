import * as React from 'react';
import { Fragment } from 'react';
import NavBar from './Navbar';
import Main from './Main/main';
import ProfileCard from './Profile/ProfileCard';
import NewsFeed from './NewsFeed/NewsFeed';
import { Switch, Route } from 'react-router';

export interface IAppProps {

}


export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Fragment>
        <NavBar/>

        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/Profile' component={ProfileCard} />
          <Route exact path='/NewsFeeds/:id' component={NewsFeed} />
        </Switch>
        <h1>Hello, World!</h1>
<NewsFeed/>


      </Fragment>
    );
  }
}