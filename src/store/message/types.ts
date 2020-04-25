export interface Message {    
    messageId: number,
    fromUserId: number,
    messageContent: string
    recipientUserIds: number[],
    hasBeenSent: boolean
}
                               

export interface MessageState { 
    messageList: Message[ ],
    nextFreeMessageId: number       
}
                                 
                                                            
export const SEND_MESSAGE = "SEND_MESSAGE"
export const REMOVE_MESSAGE_FROM_INBOX = "REMOVE_MESSAGE_FROM_INBOX"
export const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE"
export const ADD_RECIPIENT_TO_MESSAGE = "ADD_RECIPIENT_TO_MESSAGE"

interface SendMessage {
    type: typeof SEND_MESSAGE
    messageId: number 
    messageContent: string
}

interface RemoveMessageFromInbox {
    type: typeof REMOVE_MESSAGE_FROM_INBOX
    messageId: number 
    recipientUserId: number 
}

interface AddNewMessage {
    type: typeof ADD_NEW_MESSAGE
    fromUserId: number
    recipientUserId: number
}

interface AddRecipientToMessage {
    type: typeof ADD_RECIPIENT_TO_MESSAGE
    messageId: number
    recipientUserId: number
}

export type MessageActionTypes = SendMessage | RemoveMessageFromInbox | AddNewMessage | AddRecipientToMessage