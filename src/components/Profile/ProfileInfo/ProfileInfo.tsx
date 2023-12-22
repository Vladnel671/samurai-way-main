import React, {FC} from "react";
import s from './ProfileInfo.module.css'
import {UserInfo} from "../../../types";
type ProfileInfoPropsType = { profile: UserInfo }
const ProfileInfo: FC<ProfileInfoPropsType> = ({profile}) => {
    return (
        <div className={s.profileBlock}>
            <div className={s.HeaderBlock}>
                <img
                    className={s.profileHeaderImg}
                    src="https://i0.wp.com/antennadaily.ru/wp-content/uploads/2020/01/photo-1515238152791-8216bfdf89a7.jpeg?fit=1052%2C700&ssl=1"
                    alt="header-img"/>
            </div>
            {profile.photos.large && <img
                alt="profile-img" className={s.profileMainImg} src={profile.photos.large}/>}
            <div className={s.descriptionBlock}>
                <h3>{profile.fullName}</h3>
                <span className={s.descriptionProfile}>{profile.aboutMe}</span>
            </div>
        </div>

    )
}
export default ProfileInfo