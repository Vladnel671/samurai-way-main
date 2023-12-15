import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.profileHeaderBlock}>
                <img
                    className={s.profileHeaderImg}
                    src="https://i0.wp.com/antennadaily.ru/wp-content/uploads/2020/01/photo-1515238152791-8216bfdf89a7.jpeg?fit=1052%2C700&ssl=1"
                    alt=""/>
            </div>
            <img
                className={s.profileMainImg}
                src="https://steamuserimages-a.akamaihd.net/ugc/933814008881152016/838D9568CF06E89568DD6D8D58A61291110336C5/"
                alt="profileMainImg"/>
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