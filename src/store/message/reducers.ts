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

export function messageReducer( state = initialState, action: MessageActionTypes): MessageState {
  switch (action.type) {
    case SEND_MESSAGE:
      let modifiedMessage = state.messageList.filter( message => message.messageId === action.messageId)[0];
      modifiedMessage.messageContent = action.messageContent;
      return {
        ...state,
        messageList: [ ...state.messageList.filter( message => message.messageId !== action.messageId), modifiedMessage ] 
      }

    case REMOVE_MESSAGE_FROM_INBOX:
      modifiedMessage = state.messageList.filter( message => message.messageId === action.messageId)[0];
      modifiedMessage.recipientUserIds = modifiedMessage.recipientUserIds.filter( recipient => recipient !== action.recipientUserId);
      //If there are no more recipients left in the list, return state without modified message (i.e. remove it)
      if ( modifiedMessage.recipientUserIds.length === 0 ) {
        return {
          ...state,
          messageList: [ ...state.messageList.filter( message => message.messageId !== action.messageId) ] 
        }
      } else {
        return {
          ...state,
          messageList: [ ...state.messageList.filter( message => message.messageId !== action.messageId), modifiedMessage ] 
        }
      }

    case ADD_NEW_MESSAGE:
      const newMessage = {
        messageId: state.nextFreeMessageId,
        fromUserId: action.fromUserId,
        messageContent: '',
        recipientUserIds: [action.recipientUserId],
        hasBeenSent: false
      }
      const newFreeId = state.nextFreeMessageId + 1
      return {
        ...state,
        messageList: [...state.messageList, newMessage],
        nextFreeMessageId: newFreeId
      }

    case ADD_RECIPIENT_TO_MESSAGE:
      modifiedMessage = state.messageList.filter( message => message.messageId === action.messageId)[0];
      modifiedMessage.recipientUserIds.push(...modifiedMessage.recipientUserIds, action.recipientUserId);
      return {
        ...state,
        messageList: [ ...state.messageList.filter( message => message.messageId !== action.messageId), modifiedMessage ] 
      }

    default:
      return state
      
  }     
}
