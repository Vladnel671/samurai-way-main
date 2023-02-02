import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post likesCount={20} message='Hi, how are you?'/>
                <Post likesCount={31} message="It's my first post"/>
            </div>
        </div>

    )
}
export default MyPosts