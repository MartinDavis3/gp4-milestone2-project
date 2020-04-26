import * as React from 'react';
import InputMessage from './InputMessage';
import { Message } from '../../store/message/types';

export interface IDirectMessagingProps {
}


export default class DirectMessaging extends React.Component<IDirectMessagingProps> {
  
  public render() {
    return (
    <InputMessage/>
    );
  }
}
