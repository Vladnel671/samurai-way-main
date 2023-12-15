import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {RootStateType, PostsTypeProps} from '../../../types';
import {addPostAC, changeNewTextAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

type MapStateToPropsType = {
    posts: PostsTypeProps[];
    messageForNewPost: string;
};

type MapDispatchToPropsType = {
    onAddPost: (postMessage: string) => void;
    onPostChange: (newText: string) => void;
};

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onAddPost: (postMessage: string) => {
            dispatch(addPostAC(postMessage));
        },
        onPostChange: (newText: string) => {
            dispatch(changeNewTextAC(newText));
        },
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;