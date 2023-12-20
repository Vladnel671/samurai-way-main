import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import Users from "./Users";
import {RootStateType, UsersMapDispatchType, UsersPageType, UserType} from "../../types";
import {followAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

const mapStateToProps = (state: RootStateType): UsersPageType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    };
};

const mapDispatchToProps = (dispatch: Dispatch): UsersMapDispatchType => {
    return {
        onFollow: (userID: number) => {
            dispatch(followAC(userID));
        },
        onUnfollow: (userID: number) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrenPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUserCount: (totalCount: number) => {
            dispatch(setTotalUserCountAC(totalCount))
        }
    };
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserContainer;