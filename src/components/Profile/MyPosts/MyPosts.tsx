import React, {ChangeEvent} from "react"
import s from './MyPosts.module.css'
import Post from "./Post/Post"
import {PostsTypeProps} from "../../../types"

type Posts = {
    posts: PostsTypeProps[];
    addPost: (postMessage: string) => void;
    changeNewText: (newText: string) => void;
    messageForNewPost: string;
};

const MyPosts: React.FC<Posts> = ({posts, messageForNewPost, addPost, changeNewText}): JSX.Element => {

    let postsElements = [...posts].map(p => <Post key={p.id} likesCount={p.likesCount} message={p.message}/>).reverse();
    const handleAddPost = () => {
        if (messageForNewPost.trim() !== '') {
            addPost(messageForNewPost);
        }
    };

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeNewText(e.target.value)
    }

    return (
        <div className={s.postsBlock}>
            <div style={{paddingLeft: '30px'}}>
                <h3 style={{color: "white"}}>My posts</h3>
                <div className={s.TextAreaAndButtonBlock}>
                    <textarea className={s.postTextArea} placeholder='Enter your message' value={messageForNewPost}
                              onChange={onChangeHandler}></textarea>
                    <button onClick={handleAddPost}>Publish</button>
                </div>
            </div>
            <hr/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}
export default MyPosts