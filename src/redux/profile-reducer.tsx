import { ActionsTypes, PostsTypeProps, ProfilePageType } from "../types";

const initialState: ProfilePageType = {
    messageForNewPost: "",
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 54 }
    ]
};

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsTypeProps = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCount: 14
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                messageForNewPost: ""
            };
        case "CHANGE-NEW-TEXT":
            return {
                ...state,
                messageForNewPost: action.newText
            };
        default:
            return state;
    }
};

export default profileReducer;

export const addPostAC = (postMessage: string) => {
    return {
        type: "ADD-POST",
        postMessage: postMessage
    } as const;
};

export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const;
};