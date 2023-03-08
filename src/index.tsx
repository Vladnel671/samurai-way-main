import './index.css';
import {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, changePostTextCallback, RootStateType} from "./redux/state";
import state from "./redux/state";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App changePostTextCallback={changePostTextCallback} messageForNewPost={state.profilePage.messageForNewPost}
                 state={state} addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root')
    );
};
rerenderEntireTree()

subscribe(rerenderEntireTree)


