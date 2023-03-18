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

export type newMessageBody = {
    id: number,
    message: string
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
    newMessageBody: string
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
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
    updateNewMessageBody:(body: string) => void
    sendNewMessageBody: (body: string) => void
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC> | ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendNewMessageBodyAC>

export const addPostAC = (postMessage: string) => {
    return {
        type: "ADD-POST",
        postMessage: postMessage
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    } as const
}
export const sendNewMessageBodyAC = (body: string) => {
    return {
        type: "SEND-MESSAGE",
        body: body
    } as const
}

const store: StoreType = {
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
            ],
            newMessageBody : ""
        },
        sidebar: {}
    },
    changePostTextCallback(newText: string) {
        this._state.profilePage.messageForNewPost = newText
        this._onChange()
    },
    addPost(postMessage: string) {
        const newPost: PostsTypeProps = {
            id: new Date().getTime(),
            message: postMessage,
            likesCount: 14
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.messageForNewPost = '';
        this._onChange()
    },

    updateNewMessageBody (body: string){
        this._state.dialogsPage.newMessageBody = body
        this._onChange()
    },
    sendNewMessageBody (body: string){
        const newPost: MessagesType = {
            id: new Date().getTime(),
            message: body
        }
        this._state.dialogsPage.messages.push(newPost)
        this._state.dialogsPage.newMessageBody = ''
        this._onChange()
    },
    _onChange() {
        console.log("state changed")
    },
    subscribe(callback) {
        this._onChange = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost: PostsTypeProps = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCount: 14
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.messageForNewPost = '';
            this._onChange()
        } else if (action.type === "CHANGE-NEW-TEXT") {
            this._state.profilePage.messageForNewPost = action.newText
            this._onChange()
        } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
            this._state.dialogsPage.newMessageBody = action.body
            this._onChange()
        } else if (action.type === "SEND-MESSAGE") {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({
                id:new Date().getTime(),
                message: body
            })
            this._onChange()
        }
    }
}

export default store;