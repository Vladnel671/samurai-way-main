import React from "react";
import {connect} from 'react-redux';
import {RootStateType, UsersPageType, UserType} from "../../types";
import {follow, setCurrentPage, setIsFetching, setTotalUserCount, setUsers, unfollow} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

type UsersContainerPropsType = {
    users: UserType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (page: number) => void
    setTotalUserCount: (totalCount: number) => void
    isFetching: boolean
    setIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount)
            })
            .catch(error => {
                console.log(error);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setIsFetching(false)
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return this.props.isFetching ? <Preloader/> :
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   onFollow={this.props.follow}
                   onUnfollow={this.props.unfollow}/>
    }
}

const mapStateToProps = (state: RootStateType): UsersPageType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    };
};

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUserCount, setIsFetching
})(UsersContainer);
