import {addPostAC, changeNewTextAC} from "./redux/profile-reducer";
import {sendMessageAC, updateNewMessageBodyAC} from "./redux/dialogs-reducer";
import {follow, setCurrentPage, setIsFetching, setTotalUserCount, setUsers, unfollow} from "./redux/users-reducer";

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
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof setIsFetching>

export type PhotosType = {
    large: string | null,
    small: string | null
}

export type UserType = {
    id: number,
    followed: boolean,
    name: string,
    photos: PhotosType,
    status: string | null,
    uniqueUrlName: string | null
}

export type UsersPageType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}

export type PostsMapDispatchToPropsType = {
    onAddPost: (postMessage: string) => void;
    onPostChange: (newText: string) => void;
};

export type DialogsMapDispatchToPropsType = {
    updateNewMessageBody: (newText: string) => void;
    sendNewMessageBody: (body: string) => void;
};
