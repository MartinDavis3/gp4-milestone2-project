import * as React from 'react';
import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { User } from '../../store/user/types';
import { Message } from '../../store/message/types';
import InboxMessage  from './InboxMessage';

export interface IInboxMessageListProps {
  userList: User[];
  loggedInUserId: number;
  messageList: Message[];
}

export class InboxMessageList extends Component<IInboxMessageListProps> {

  public render() {
    const { loggedInUserId, messageList } = this.props;
    let sentMessages = messageList.filter( message => (message.hasBeenSent) );
    var userMessages: Message[] = [];
    for (let i=0; i < sentMessages.length; i++) {
      let recipList = sentMessages[i].recipientUserIds;
      for (let j=0; j < recipList.length; j++) {
        if (recipList[j] === loggedInUserId ) {
          userMessages.push(sentMessages[i]);
        }
      }
    }
    return (
      <Fragment>
        { userMessages.map( message => {
          return <InboxMessage key={message.messageId} itemMessageId={message.messageId} />})
        }
      </Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    userList: state.user.userList,
    loggedInUserId: state.user.loggedInUserId,
    messageList: state.message.messageList
    };
}

export default connect(
  mapStateToProps,
  {}
)(InboxMessageList);