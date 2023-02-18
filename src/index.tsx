import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type DialogsType = {
    id: number,
    name: string
}
export type MessagesType = {
    id: number,
    message: string
}
let dialogs: DialogsType[] = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Vlad'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Viktor'},
    {id: 5, name: 'Andrey'},
    {id: 6, name: 'Anton'}
]
let messages: MessagesType[] = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'}
]

///////////////////////////////


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
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
    document.getElementById('root')
);