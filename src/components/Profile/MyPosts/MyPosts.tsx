import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


type PostsTypeProps = {
    id: number,
    message: string,
    likesCount: number
}
const MyPosts:React.FC= (): JSX.Element => {


    let posts : Array<PostsTypeProps> = [
        {id: 1, message: 'Hi, how are you?', likesCount: 22},
        {id: 2, message: "It's my first post", likesCount: 31}
    ]

    let postsElements = posts.map( p => <Post likesCount={p.likesCount} message={p.message}/>)

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