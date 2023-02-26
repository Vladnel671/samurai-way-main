import React, {ChangeEvent, FC} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsTypeProps} from "../../../redux/state";

type Posts = {
    posts: PostsTypeProps[]
    addPost: (postMessage: string) => void
    messageForNewPost: string
    changePostTextCallback: (newText: string) => void
}

const MyPosts: React.FC<Posts> = (props): JSX.Element => {

    let postsElements = props.posts.map(p => <Post likesCount={p.likesCount} message={p.message}/>)

    let addPost = () => {props.addPost(props.messageForNewPost)}

    const newTextChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>)=>props.changePostTextCallback(e.currentTarget.value)


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.messageForNewPost} onChange={newTextChangeHandler}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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