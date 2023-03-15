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

export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostsTypeProps>
}
export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}
export type StoreType = {
    _state: RootStateType
    changePostTextCallback: (newText: string) => void
    addPost: (postMessage: string) => void
    _onChange: () => void
    subscribe: (callback: () => void ) => void
    getState: () => RootStateType
}

const store : StoreType = {
    _state: {
    profilePage: {
        messageForNewPost: "",
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
},
    changePostTextCallback (newText: string) {
        this._state.profilePage.messageForNewPost = newText
        this._onChange()
    },
    addPost (postMessage: string) {
        let newPost: PostsTypeProps = {
            id: new Date().getTime(),
            message: postMessage,
            likesCount: 14
        }
        this._state.profilePage.posts.push(newPost)
        this._onChange()
    },
    _onChange() {
        console.log("state changed")
    },

    subscribe (callback){
        this._onChange = callback
    },
    getState() {
        return this._state
    }
}

export default store;