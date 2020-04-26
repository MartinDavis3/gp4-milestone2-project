import * as React from 'react';
import { Component, Fragment } from 'react';
import { Form, TextArea } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { userInformationChange } from '../store/user/actions';
import { messageContentChange } from '../store/message/actions';
import { Message } from '../store/message/types';

export interface ITextInputProps {
  serving: 'userInformation' | 'messageContent';
  rows: string;
  placeholder: string;
  userInformationChange: typeof userInformationChange;
  messageContentChange: typeof messageContentChange;
  messageList: Message[];
  loggedInUserId: number;
}

export class TextInput extends Component<ITextInputProps> {


  private onUserFieldChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    let { serving, userInformationChange, messageContentChange, messageList, loggedInUserId } = this.props;
    if ( loggedInUserId !== 0 ) {
      switch (serving) {

        case 'userInformation':
          userInformationChange(event.currentTarget.value);
        break;

        case 'messageContent':
          //Every user will have an unsent message in the message list for entry of new messages
          let unsentMessages: Message[] | undefined;
          let targetMessage: Message | undefined;
          unsentMessages = messageList.filter( message => !message.hasBeenSent);
          targetMessage = unsentMessages.filter( message => message.fromUserId = loggedInUserId )[0];
          if ( targetMessage !== undefined ) {
            messageContentChange(targetMessage.messageId, event.currentTarget.value);
          } else {
            event.currentTarget.value = ''
          }
      }
    } else {
        event.currentTarget.value = ''
    }
  }

  public render() {
    let { rows, placeholder } = this.props
    return (
      <Fragment>
        <Form>
          <TextArea
            rows= {rows}
            placeholder= {placeholder}
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


//comment for github test - can be removed