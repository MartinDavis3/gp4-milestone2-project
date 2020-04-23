import {MessageActionTypes, SEND_MESSAGE, REMOVE_MESSAGE_FROM_INBOX, ADD_NEW_MESSAGE, ADD_RECIPIENT_TO_MESSAGE, Message} from "./types";

export function sendMessage ( userId: number ): MessageActionTypes {
    return {
        type: SEND_MESSAGE, 
        userId: userId
    }
}

export function removeMessageFromInbox ( userId: number, messageId: number ): MessageActionTypes {
    return {
        type: REMOVE_MESSAGE_FROM_INBOX,
        userId: userId,
        messageId: messageId
    }
}

export function addNewMessage ( userId: number ): MessageActionTypes {
    return {
        type: ADD_NEW_MESSAGE,
        userId: userId
    }
}

export function addReipientToMessage ( userId: number): MessageActionTypes {
    return {
        type: ADD_RECIPIENT_TO_MESSAGE,
        userId: userId
    }
}
