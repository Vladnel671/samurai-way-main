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

let dialogs: DialogsType[]
let messages: MessagesType[]
let posts: PostsTypeProps[]

type ProfilePageType = {
    posts: Array<PostsTypeProps>
}
type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

let state : RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 54}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Vlad'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Viktor'},
            {id: 5, name: 'Andrey'},
            {id: 6, name: 'Anton'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ]
    },
    sidebar: {}
}


export default state;