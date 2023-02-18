import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export type PostsTypeProps = {
    id: number,
    message: string,
    likesCount: number
}

let posts: PostsTypeProps[] = [
    {id: 1, message: "Hi, how are you?", likesCount: 22},
    {id: 2, message: "It's my first post", likesCount: 31}
]



ReactDOM.render(
    <App posts={posts}/>,
  document.getElementById('root')
);