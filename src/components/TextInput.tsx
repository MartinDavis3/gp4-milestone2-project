import * as React from 'react';
import { Component, Fragment } from 'react';
import { Form, TextArea } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { userInformationChange } from '../store/user/actions';
import { messageContentChange } from '../store/message/actions'
import { Message } from '../store/message/types'

export interface ITextInputProps {
  serving: 'userInformation' | 'messageContent';
  userInformationChange: typeof userInformationChange;
  messageContentChange: typeof messageContentChange;
  messageList: Message[];
  loggedInUserId: number;
}

export class TextInput extends Component<ITextInputProps> {

private onUserFieldChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
  let { serving, userInformationChange, messageContentChange, messageList, loggedInUserId } = this.props
  if ( loggedInUserId !== 0 ) {
    switch (serving) {

      case 'userInformation':
        userInformationChange(event.currentTarget.value);
      break;

      case 'messageContent':
        let unsentMessages: Message[];
        let targetMessage: Message;
        unsentMessages = messageList.filter( message => !message.hasBeenSent);
        targetMessage = unsentMessages.filter( message => message.fromUserId = loggedInUserId )[0];
        messageContentChange(targetMessage.fromUserId, event.currentTarget.value);
        
    }
  }
}

  public render() {
    return (
      <Fragment>
        <Form>
          <TextArea
            rows= {5}
            placeholder='Write a bit about yourself'
            onChange={this.onUserFieldChange}
          />
        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    messageList: state.message.messageList,
    loggedInUserId: state.user.loggedInUserId
  };
}

export default connect(
  mapStateToProps,
  { userInformationChange, messageContentChange }
)(TextInput);