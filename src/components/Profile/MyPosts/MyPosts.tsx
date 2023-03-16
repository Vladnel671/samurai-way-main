import React, {ChangeEvent, FC} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsTypes, PostsTypeProps} from "../../../redux/state";

type Posts = {
    posts: PostsTypeProps[]

    messageForNewPost: string
    changePostTextCallback: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}

const MyPosts: React.FC<Posts> = (props): JSX.Element => {

    let postsElements = props.posts.map(p => <Post key={p.id} likesCount={p.likesCount} message={p.message}/>)

    let addPost = () => {
        props.dispatch({type: "ADD-POST", postMessage: props.messageForNewPost})
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changePostTextCallback(e.currentTarget.value)
    }


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