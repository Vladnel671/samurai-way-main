import axios from "axios";
import React from "react";
import {UserType} from "../../types";
import Users from "./Users";

type UsersAPIPropsType = {
    users: UserType[]
    onFollow: (userID: number) => void
    onUnfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrenPage: (page: number) => void
    setTotalUserCount: (totalCount: number) => void
}

class UsersAPIComponent extends React.Component<UsersAPIPropsType> {
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
        this.props.setCurrenPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
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
                      onUnfollow={this.props.onUnfollow}
        />
    }
}

export default UsersAPIComponent;