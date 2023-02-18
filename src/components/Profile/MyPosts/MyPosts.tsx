import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 22},
        {id: 2, message: "It's my first post", likesCount: 31}
    ]


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post likesCount={postData[0].likesCount} message={postData[0].message}/>
                <Post likesCount={postData[1].likesCount} message={postData[1].message}/>
            </div>
        </div>

    )
}
export default MyPosts