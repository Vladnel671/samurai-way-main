import React from "react";
import s from './Post.module.css'

type MyPostsTypeProps = {
    message: string
    likesCount: number
}
const Post: React.FC<MyPostsTypeProps> = ({message, likesCount}): JSX.Element => {
    return (
        <div className={s.postBlock}>
            <div className={s.imgTextDateBlock}>
                <div>
                    <img
                        className={s.imgPost}
                        src="https://masterpiecer-images.s3.yandex.net/487ca75268ea11eeaea6da477c0f1ee2:upscaled"
                        alt=""/>
                </div>
                <div>
                    <div>Name Surname</div>
                    <div>12 Dec at 18:31</div>
                </div>
            </div>
            <div className={s.messageBlock}>
                <span className={s.postMessage}>{message}</span>
            </div>
            <div className={s.likesBlock}>
                <span>Likes</span> <span className={s.likesCount}>{likesCount}</span>
            </div>
        </div>
    )
}
export default Post