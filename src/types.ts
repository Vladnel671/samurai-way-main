import {addPostAC, changeNewTextAC} from "./redux/profile-reducer";
import {sendMessageAC, updateNewMessageBodyAC} from "./redux/dialogs-reducer";
import {followAC, setUsersAC, unfollowAC} from "./redux/users-reducer";

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
    usersPage: UsersPageType
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

type locationType = {
    city: string,
    country: string
}

export type UserType = {
    id: number,
    userPhoto: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: locationType
}

export type UsersPageType = {
    users: UserType[],
}

export type PostsMapDispatchToPropsType = {
    onAddPost: (postMessage: string) => void;
    onPostChange: (newText: string) => void;
};

export type DialogsMapDispatchToPropsType = {
    updateNewMessageBody: (newText: string) => void;
    sendNewMessageBody: (body: string) => void;
};

export type UsersMapDispatchType = {
    onFollow: (userID: number) => void
    onUnfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
}