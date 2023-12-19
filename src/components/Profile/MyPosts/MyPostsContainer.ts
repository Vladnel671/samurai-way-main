import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {PostsMapDispatchToPropsType, ProfilePageType, RootStateType} from '../../../types';
import {addPostAC, changeNewTextAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state: RootStateType): ProfilePageType => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): PostsMapDispatchToPropsType => {
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