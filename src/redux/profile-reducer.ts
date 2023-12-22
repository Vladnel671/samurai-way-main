import {ActionsTypes, PostsTypeProps, ProfilePageType, UserInfo} from "../types";

const initialState: ProfilePageType = {
    messageForNewPost: "",
    posts: [
        {id: 1, message: "It's my first post", likesCount: 12},
        {id: 2, message: "Hi, how are you?", likesCount: 54}
    ],
    profile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: null,
        lookingForAJobDescription: null,
        fullName: null,
        userId: null,
        photos: {
            small: null,
            large: null
        }
    }
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
        case "SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
};

export default profileReducer;

export const addPost = (postMessage: string) => {
    return {
        type: "ADD-POST",
        postMessage
    } as const;
};

export const changeNewText = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText
    } as const;
};

export const setUserProfile = (profile: UserInfo) => {
    return {
        type: "SET_USER_PROFILE",
        profile
    } as const
}