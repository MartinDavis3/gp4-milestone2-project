import * as React from 'react';
import { Component, Fragment } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { removeMessageFromInbox } from '../../store/message/actions';
import { Message } from '../../store/message/types';
import { User } from '../../store/user/types';

export interface IInboxMessageProps {
  messageList: Message[],
  userList: User[],
  loggedInUserId: number
  removeMessageFromInbox: typeof removeMessageFromInbox
  itemMessageId: number
}


export class InboxMessage extends Component<IInboxMessageProps> {

  onClickRemoveMessage() {
    const { itemMessageId, messageList, userList, loggedInUserId } = this.props;
  }

  public render() {
    const { itemMessageId, messageList, userList, loggedInUserId } = this.props;
    const itemUsername = userList.filter( user => (user.userId === itemUserId))[0].username;
    return (
      <Fragment>
          <Grid.Row>
            <Button color={this.state.backColour} key={itemUserId} content={itemUsername} onClick={() => this.onClickRemoveMessage()} />        
          </Grid.Row>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    messageList: state.message.messageList,
    userList: state.user.userList,
    loggedInUserId: state.user.loggedInUserId
  };
}

export default connect(
  mapStateToProps,
  { removeMessageFromInbox }
)(InboxMessage);