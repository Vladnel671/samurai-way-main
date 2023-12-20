import React from "react";
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {RootStateType, UsersMapDispatchType, UsersPageType, UserType} from "../../types";
import {followAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";

type UsersContainerPropsType = {
    users: UserType[]
    onFollow: (userID: number) => void
    onUnfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (page: number) => void
    setTotalUserCount: (totalCount: number) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount)
            })
            .catch(error => {
                console.log(error);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      onFollow={this.props.onFollow}
                      onUnfollow={this.props.onUnfollow}/>
    }
}

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
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUserCount: (totalCount: number) => {
            dispatch(setTotalUserCountAC(totalCount))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
