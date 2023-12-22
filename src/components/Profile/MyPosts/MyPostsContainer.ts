import {connect} from 'react-redux';
import {PostsType, RootStateType} from '../../../types';
import {addPost, changeNewText} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state: RootStateType): PostsType => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost,
    };
};

const MyPostsContainer = connect(mapStateToProps, {
    changeNewText,
    addPost
})(MyPosts);

export default MyPostsContainer;