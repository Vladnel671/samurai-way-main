import React, {ChangeEvent} from "react"
import s from './MyPosts.module.css'
import Post from "./Post/Post"
import {PostsTypeProps} from "../../../types"

type Posts = {
    posts: PostsTypeProps[];
    onAddPost: (postMessage: string) => void;
    onPostChange: (newText: string) => void;
    messageForNewPost: string;
};

const MyPosts: React.FC<Posts> = ({posts, messageForNewPost, onAddPost, onPostChange}): JSX.Element => {

    let postsElements = posts.map(p => <Post key={p.id} likesCount={p.likesCount} message={p.message}/>)
    const handleAddPost = () => {
        onAddPost(messageForNewPost);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onPostChange(e.target.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea className={s.postTextArea} placeholder='Enter your message' value={messageForNewPost}
                              onChange={onChangeHandler}></textarea>
                </div>
                <div>
                    <button onClick={handleAddPost}>Add post</button>
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