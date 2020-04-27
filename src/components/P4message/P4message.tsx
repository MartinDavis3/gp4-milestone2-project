import * as React from 'react';
import { Fragment } from 'react';
import MessageSendButton  from './MessageSendButton';
import TextInput from '../TextInput';
import UserList from './UserList';

export interface IP4messageProps {
}

export default class P4message extends React.Component<IP4messageProps> {
  public render() {
    return (
      <Fragment>
        Page 4. Direct Messaging
        <UserList/>
        <TextInput serving = 'messageContent' rows='2' placeholder = 'Enter your message...' ></TextInput>
        <MessageSendButton></MessageSendButton>
      </Fragment>
    );
  }
}
