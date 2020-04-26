import * as React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export interface INavBarProps {
}

export default class NavBar extends React.Component<INavBarProps> {
    public render() {
        return (
            <Menu>
                <Menu.Item
                    as={Link}
                    to={`/Main`}
                    name='Main'
                >
                    Main
                </Menu.Item>

                <Menu.Item
                    as={Link}
                    to={`/P2profile/P2profile`}
                    name='P2profile'
                >
                    P2profile
                </Menu.Item>

                <Menu.Item
                    as={Link}
                    to={`/P3newsfeed/P3newsfeed`}
                    name='P3newsfeed'
                >
                    P3newsfeed
                </Menu.Item>

                <Menu.Item
                    as={Link}
                    to={`/P4newsfeed/P4newsfeed`}
                    name='P4newsfeed'
                >
                    P4message
                </Menu.Item>
            </Menu>
        );
    }
}
