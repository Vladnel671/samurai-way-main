import state, {ActionsTypes, PostsTypeProps, ProfilePageType, RootStateType, StoreType} from "./state";

const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsTypeProps = {
                id: new Date().getTime(),
                message: action.postMessage,
                likesCount: 14
            }
            state.posts.push(newPost)
            state.messageForNewPost = '';
            return state;
        case "CHANGE-NEW-TEXT":
            state.messageForNewPost = action.newText;
            return state;
        default:
            return state;
    }
};
export default profileReducer

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