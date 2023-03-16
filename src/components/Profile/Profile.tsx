import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsTypeProps, ProfilePageType} from "../../redux/state";

type Posts = {
    state: ProfilePageType
    messageForNewPost: string
    changePostTextCallback: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}

const Profile: React.FC<Posts> = (props): JSX.Element => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts changePostTextCallback={props.changePostTextCallback} messageForNewPost={props.messageForNewPost} dispatch={props.dispatch} posts={props.state.posts}/>
        </div>

    )
}
export default Profile