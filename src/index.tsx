import './index.css';
import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {RootStateType} from "./redux/state";
import store from "./redux/state";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} changePostTextCallback={store.changePostTextCallback.bind(store)} messageForNewPost={store._state.profilePage.messageForNewPost} state={store.getState()} addPost={store.addPost.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
};

store.subscribe(rerenderEntireTree)
rerenderEntireTree()


