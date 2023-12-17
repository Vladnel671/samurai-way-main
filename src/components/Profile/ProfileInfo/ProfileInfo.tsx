import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div className={s.profileBlock}>
            <div className={s.HeaderBlock}>
                <img
                    className={s.profileHeaderImg}
                    src="https://i0.wp.com/antennadaily.ru/wp-content/uploads/2020/01/photo-1515238152791-8216bfdf89a7.jpeg?fit=1052%2C700&ssl=1"
                    alt="header-img"/>
            </div>
            <img
                alt="profile-img"
                className={s.profileMainImg}
                src="https://masterpiecer-images.s3.yandex.net/487ca75268ea11eeaea6da477c0f1ee2:upscaled"/>
            <div className={s.descriptionBlock}>
                <h3>Name Surname</h3>
                <span className={s.descriptionProfile}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim expedita nesciunt quasi sunt ullam.
                    Reiciendis repellendus unde voluptates voluptatum!</span>
            </div>
        </div>

    )
}
export default ProfileInfo