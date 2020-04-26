import * as React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { RootState } from '../store';
import { connect } from 'react-redux';

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
                    to={`/NewsFeed`}
                    name='NewsFeed'
                >
                   Edit Profile
                </Menu.Item>

                <Menu.Item
                    as={Link}
                    to={`/ProfileCard`}
                    name='ProfileCard'
                >
                    Logout
                </Menu.Item>
            </Menu>
        );
    }
}