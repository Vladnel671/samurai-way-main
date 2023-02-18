import React from "react";
import s from './Post.module.css'


type MyPostsTypeProps = {
    message: string
    likesCount : number
}
const Post : React.FC<MyPostsTypeProps> = (props): JSX.Element => {
    return (
        <div className={s.item}>
            <img src="https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg" alt=""/>
            {props.message}
            <div>
                <span>Likes</span> <span className={s.likesCount}>{props.likesCount}</span>
            </div>
        </div>
    )
}
export default Post