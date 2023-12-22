import {addPost, changeNewText, setUserProfile} from "./redux/profile-reducer";
import {sendMessage, updateNewMessage} from "./redux/dialogs-reducer";
import {follow, setCurrentPage, setIsFetching, setTotalUserCount, setUsers, unfollow} from "./redux/users-reducer";
import {setAuthUserData} from "./redux/auth-reducer";

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
    profile: UserInfo
}

export type UserInfo = {
    userId: number | null;
    fullName: string | null;
    aboutMe: string | null;
    contacts: {
        facebook: string | null;
        website: string | null;
        vk: string | null;
        twitter: string | null;
        instagram: string | null;
        youtube: string | null;
        github: string | null;
        mainLink: string | null;
    };
    lookingForAJob: boolean | null;
    lookingForAJobDescription: string | null;
    photos: {
        small: string | null;
        large: string | null;
    };
};


export type PostsType = {
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
    auth: AuthStateType
}

export type ActionsTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof changeNewText>
    | ReturnType<typeof updateNewMessage>
    | ReturnType<typeof sendMessage>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof setUserProfile>

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
export type AuthStateType = {
    userID: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
export type AuthActionsType =
    ReturnType<typeof setAuthUserData>
