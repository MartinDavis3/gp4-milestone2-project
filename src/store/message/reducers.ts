import { MessageActionTypes, SEND_MESSAGE, REMOVE_MESSAGE_FROM_INBOX, ADD_NEW_MESSAGE, ADD_RECIPIENT_TO_MESSAGE, MessageState } from "./types";

const initialState: MessageState = {
  messageList: [
    {
      messageId: 1,
      fromUserId: 1,
      messageContent: 'Hi, how are you?',
      recipientUserIds: [2],
      hasBeenSent: true
    },
    {
      messageId: 2,
      fromUserId: 1,
      messageContent: 'Could we do a google-hangout later?',
      recipientUserIds: [2, 3],
      hasBeenSent: true
    },
    {
      messageId: 3,
      fromUserId: 2,
      messageContent: 'I am fine thanks',
      recipientUserIds: [1],
      hasBeenSent: true
    },
    {
      messageId: 4,
      fromUserId: 2,
      messageContent: 'Yes, that would be good',
      recipientUserIds: [1, 3],
      hasBeenSent: true
    },
    {
      messageId: 5,
      fromUserId: 3,
      messageContent: 'Sorry, I cannot make it today',
      recipientUserIds: [1, 2],
      hasBeenSent: true
    }
  ],
  nextFreeMessageId: 6
}

//This is just stubbed out to simply return the state in all cases.
//Logic can be added later or by whoever needs it.
export function messageReducer( state = initialState, action: MessageActionTypes): MessageState {
  switch (action.type) {
    case SEND_MESSAGE:
      return state

    case REMOVE_MESSAGE_FROM_INBOX:
      return state

    case ADD_NEW_MESSAGE:
      return state

    case ADD_RECIPIENT_TO_MESSAGE:
      return state
      
    default:
      return state
  }     
}
