import React from "react";
import s from './Post.module.css'

type MyPostsTypeProps = {
    message: string
    likesCount: number
}
const Post: React.FC<MyPostsTypeProps> = ({message, likesCount}): JSX.Element => {
    return (
        <div className={s.item}>
            <img
                src="https://masterpiecer-images.s3.yandex.net/487ca75268ea11eeaea6da477c0f1ee2:upscaled"
                alt=""/>
            {message}
            <div>
                <span>Likes</span> <span className={s.likesCount}>{likesCount}</span>
            </div>
        </div>
    )
}
export default Post