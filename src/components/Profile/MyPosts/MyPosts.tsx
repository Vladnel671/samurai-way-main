import React, {FC} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsTypeProps} from "../../../../src/index";

type Posts = {
    posts: PostsTypeProps[]
}

const MyPosts: React.FC<Posts>= (props): JSX.Element => {

    let postsElements = props.posts.map( p => <Post likesCount={p.likesCount} message={p.message}/>)

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
                {postsElements}
            </div>
        </div>

    )
}
export default MyPosts