import * as React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

export interface INavBarProps {
}

export default class NavBar extends React.Component<INavBarProps> {
    public render() {
        return (
          <Menu>
            <Menu.Item
                as={Link}
                to={`/`} /*Will be home the profile page? */
                name='Home'
            >
                Home
            </Menu.Item>

            <Menu.Item
                as={Link}
                to={`/P2profile/P2profile`}
                name='Profile'
            >
                Profile
            </Menu.Item>


            <Menu.Item
                as={Link}
                to={`/P3newsfeed/P3newsfeed`}
                name='NewsFeed'
            >
                NewsFeed
            </Menu.Item>

            <Menu.Item
                as={Link}
                to={`/P4message/P4message`}
                name='Messaging'
            >
                Messaging
            </Menu.Item>
            <React.Fragment>
              <Button content='Logout'/>
            </React.Fragment>

          </Menu>
        );
    }
}