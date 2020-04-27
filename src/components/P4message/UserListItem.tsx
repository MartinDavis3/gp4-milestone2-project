import * as React from 'react';
import { Component, Fragment } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { addNewMessage, addRecipientToMessage} from '../../store/message/actions';
import { Message } from '../../store/message/types';
import { User } from '../../store/user/types';

export interface IUserListItemProps {
  messageList: Message[],
  userList: User[],
  loggedInUserId: number
  addNewMessage: typeof addNewMessage
  addRecipientToMessage: typeof addRecipientToMessage
  itemUserId: number
}

export class UserListItem extends Component<IUserListItemProps> {

  addRecipient() {
    const { itemUserId, messageList, loggedInUserId, addNewMessage, addRecipientToMessage } = this.props;
    //First, find out if a new message is needed.
    let unsentMessages: Message[] | undefined;
    let currentMessage: Message | undefined;
    unsentMessages = messageList.filter(individualMessage => (!individualMessage.hasBeenSent));
    currentMessage = unsentMessages.filter(individualMessage => (individualMessage.fromUserId === loggedInUserId))[0];
    if ( currentMessage === undefined ) {
      addNewMessage( loggedInUserId, itemUserId );
    } else {
      //Message already open, so just add recipient.
      addRecipientToMessage( currentMessage.messageId, itemUserId);
    }
  }

  public render() {
    const { itemUserId, userList } = this.props
    const itemUsername = userList.filter( user => (user.userId === itemUserId))[0].username;
    return (
      <Fragment>
          <Grid.Row>
            <Button key={itemUserId} content={itemUsername} onClick={() => this.addRecipient()} />        
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
  { addNewMessage, addRecipientToMessage }
)(UserListItem);