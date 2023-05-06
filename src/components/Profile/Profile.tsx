import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsTypeProps, ProfilePageType, StoreType} from "../../redux/store";

type Posts = {
    state: StoreType
    addPost: (postMessage: string) => void
    changePostTextCallback: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
    messageForNewPost: string
}

const Profile: React.FC<Posts> = (props): JSX.Element => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts changePostTextCallback={props.changePostTextCallback} state={props.state} messageForNewPost={props.messageForNewPost}  addPost={props.addPost} dispatch={props.dispatch} posts={props.state._state.profilePage.posts}/>
        </div>

    )
}
export default Profile