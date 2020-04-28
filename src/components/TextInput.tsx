import * as React from 'react';
import { Component, Fragment } from 'react';
import { Form, TextArea } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { userInformationChange } from '../store/user/actions';
import { messageContentChange } from '../store/message/actions';
import { Message } from '../store/message/types';
import { User } from '../store/user/types';

export interface ITextInputProps {
  serving: 'userInformation' | 'messageContent';
  rows: string;
  displayingUserId: string;
  userInformationChange: typeof userInformationChange;
  messageContentChange: typeof messageContentChange;
  userList: User[],
  messageList: Message[];
  loggedInUserId: number;
}

export class TextInput extends Component<ITextInputProps> {

  private onUserFieldChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    let { serving, userInformationChange, messageContentChange, messageList, loggedInUserId } = this.props;
    if ( loggedInUserId !== 0 ) {
      switch (serving) {

        case 'userInformation':
          const { displayingUserId } = this.props
          if (Number(displayingUserId) === loggedInUserId) {
            userInformationChange(event.currentTarget.value);
          }
        break;

        case 'messageContent':
          //An opened but unsent message in the message list can be written to
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
    const { rows, userList, displayingUserId, serving, loggedInUserId } = this.props
    const displayId = Number(displayingUserId);
    let valueToDisplay: string | undefined;
    let validDisplayId: boolean;
    validDisplayId = ( (displayId < userList.length + 1) && (displayId > 0) )
    if ( serving === 'userInformation' && loggedInUserId !== 0 && validDisplayId ) {
      valueToDisplay = userList.filter( user => ( user.userId === Number(displayingUserId)))[0].userInformation;
    }
    return (
      <Fragment>
        <Form>
          <TextArea
            type='text'
            value={valueToDisplay}
            rows= {rows}
            onChange={this.onUserFieldChange}
          />
        </Form>
      </Fragment>
    );
  }

}

const mapStateToProps = (state: RootState) => {
  return {
    userList: state.user.userList,
    messageList: state.message.messageList,
    loggedInUserId: state.user.loggedInUserId
  };
}

export default connect(
  mapStateToProps,
  { userInformationChange, messageContentChange }
)(TextInput);
