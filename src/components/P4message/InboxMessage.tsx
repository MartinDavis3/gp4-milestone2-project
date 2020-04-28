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
    console.log('remove message');
    this.props.removeMessageFromInbox(this.props.itemMessageId, this.props.loggedInUserId);
  }

  public render() {
    const { itemMessageId, messageList, userList } = this.props;
    const itemMessage = messageList.filter( message => (message.messageId === itemMessageId))[0];
    const senderId = itemMessage.fromUserId
    const senderUsername = userList.filter( user => ( user.userId === senderId))[0].username;
    const messageText = itemMessage.messageContent;
    const outstring = senderUsername + ': ' + messageText;
    return (
      <Fragment>
          <Grid.Row>
            <Button key={itemMessageId} content={outstring} onClick={() => this.onClickRemoveMessage()} />        
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

