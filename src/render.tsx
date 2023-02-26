import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, changePostTextCallback, RootStateType} from "./redux/state";
export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App changePostTextCallback={changePostTextCallback} messageForNewPost={state.profilePage.messageForNewPost} state={state} addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root')
    );
};

