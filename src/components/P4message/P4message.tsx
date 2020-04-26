import * as React from 'react';
import { Fragment } from 'react';
import MessageSendButton  from './MessageSendButton';

export interface IP4messageProps {
}

export default class P4message extends React.Component<IP4messageProps> {
  public render() {
    return (
      <Fragment>
        Page 4. Direct Messaging
        <MessageSendButton></MessageSendButton>
      </Fragment>
    );
  }
}
