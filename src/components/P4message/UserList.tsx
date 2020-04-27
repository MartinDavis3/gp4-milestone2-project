import * as React from 'react';
import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { User } from '../../store/user/types';
import UserListItem from './UserListItem';

export interface IUserListProps {
  userList: User[],
  loggedInUserId: number
}

export class UserList extends Component<IUserListProps> {

  public render() {
    const { userList, loggedInUserId } = this.props;
    let otherUsers: User[] | undefined
    otherUsers = userList.filter( user => (user.userId !== loggedInUserId))
    return (
      <Fragment>
        { otherUsers.map( user => {
          return <UserListItem key={user.userId} itemUserId={user.userId} />})
        }
      </Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    userList: state.user.userList,
    loggedInUserId: state.user.loggedInUserId
    };
}

export default connect(
  mapStateToProps,
  {}
)(UserList);