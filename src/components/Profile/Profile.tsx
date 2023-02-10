import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://i0.wp.com/antennadaily.ru/wp-content/uploads/2020/01/photo-1515238152791-8216bfdf89a7.jpeg?fit=1052%2C700&ssl=1"
                    alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>

    )
}
export default Profile