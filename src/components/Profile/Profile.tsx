import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsTypeProps} from "../../../src/index";

type Posts = {
    posts: PostsTypeProps[]
}

const Profile: React.FC<Posts> = (props): JSX.Element => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>

    )
}
export default Profile