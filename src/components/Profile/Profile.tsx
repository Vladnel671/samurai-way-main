import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {changePostTextCallback, PostsTypeProps, ProfilePageType} from "../../redux/state";

type Posts = {
    state: ProfilePageType
    addPost :  (postMessage : string) => void
    messageForNewPost: string
    changePostTextCallback: (newText: string) => void
}

const Profile: React.FC<Posts> = (props): JSX.Element => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts changePostTextCallback={props.changePostTextCallback} messageForNewPost={props.messageForNewPost} addPost={props.addPost} posts={props.state.posts}/>
        </div>

    )
}
export default Profile