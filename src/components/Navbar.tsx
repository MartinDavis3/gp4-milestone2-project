import * as React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { RootState } from '../store';
import { connect } from 'react-redux';
import { signOut } from '../store/user/actions';

export interface INavBarProps {
  loggedInUserId: number
  signOut: typeof signOut
}

export class NavBar extends React.Component<INavBarProps> {

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
                to={`/P2profile/${this.props.loggedInUserId}`}
                name='Profile'
            >
                Profile
            </Menu.Item>
            {/* <Menu.Item
                as={Link}
                to={`/ProfileCard/${this.props.loggedInUserId}`}
                name='ProfileCard'
            >
                Profilecard
            </Menu.Item> */}


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
              <Button content='Sign-Out' onClick={() => this.props.signOut()}/>
            </React.Fragment>

          </Menu>
        );
    }
}


const mapStateToProps = (state: RootState) => {
  return {
    loggedInUserId: state.user.loggedInUserId
  };
}

export default connect(
  mapStateToProps,
  { signOut }
)(NavBar);