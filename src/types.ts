import {addPostAC, changeNewTextAC} from "./redux/profile-reducer";
import {sendMessageAC, updateNewMessageBodyAC} from "./redux/dialogs-reducer";

export type DialogsType = {
    id: number,
    name: string
}

export type MessagesType = {
    id: number,
    message: string
}

export type PostsTypeProps = {
    id: number,
    message: string,
    likesCount: number
}

export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostsTypeProps>
}

export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>

export type PostsMapDispatchToPropsType = {
    onAddPost: (postMessage: string) => void;
    onPostChange: (newText: string) => void;
};

export type DialogsMapDispatchToPropsType = {
    updateNewMessageBody: (newText: string) => void;
    sendNewMessageBody: (body: string) => void;
};
