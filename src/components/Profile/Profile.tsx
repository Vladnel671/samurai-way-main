import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from './Profile.module.css'
import {UserInfo} from "../../types";
import Preloader from "../common/Preloader/Preloader";

type ProfilePropsType = { profile: UserInfo }
const Profile: React.FC<ProfilePropsType> = ({profile}): JSX.Element => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={s.ProfileAndPostsBlock}>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile