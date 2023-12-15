import {ActionsTypes, MessagesType, DialogPageType} from "../types";

const initialState: DialogPageType = {
    dialogs: [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
        { id: 3, name: "Bob" }
    ],
    messages: [
        { id: 1, message: "Hello!" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Nice to meet you!" }
    ],
    newMessageBody: ""
};

const dialogsReducer = (state: DialogPageType = initialState, action: ActionsTypes): DialogPageType => {
    switch (action.type) {
        case "SEND-MESSAGE":
            const newMessage: MessagesType = {
                id: new Date().getTime(),
                message: action.message
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageBody: ""
            };
        case "UPDATE-NEW-MESSAGE-BODY":
            return {
                ...state,
                newMessageBody: action.body
            };
        default:
            return state;
    }
};

export default dialogsReducer;

export const sendMessageAC = (message: string) => {
    return {
        type: "SEND-MESSAGE",
        message: message
    } as const;
};

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    } as const;
};