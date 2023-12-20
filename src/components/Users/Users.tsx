import axios from "axios";
import React from "react";
import s from "./Users.module.css";
import {UserType} from "../../types";

type UsersPropsType = {
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

class Users extends React.Component<UsersPropsType> {
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
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div className={s.UsersBlock}>
                    {this.props.users.map(u => (
                        <div className={s.userInfoBlock} key={u.id}>
                            <img src={u.photos.large ? u.photos.large : ''} className={s.userPhoto} alt="user-photo"/>
                            <span className={s.fullNameBlock}>{u.name}</span>
                            <span>{u.status}</span>
                            <div className={s.locationBlock}>
                                <span>Country</span>, <span className={s.userCity}>City</span>
                            </div>
                            <div>
                                {u.followed ? (
                                    <button className={s.followUnfollowBtn} onClick={() => this.props.onUnfollow(u.id)}>
                                        Unfollow
                                    </button>
                                ) : (
                                    <button className={s.followUnfollowBtn} onClick={() => this.props.onFollow(u.id)}>
                                        Follow
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={s.pagination}>
                    {pages.map((p, index) => {
                        return <span
                            key={index}
                            onClick={() => {
                                this.onPageChanged(p)
                            }}
                            className={this.props.currentPage === p ? s.selectedPage : s.page}>{p}</span>
                    })}
                </div>
            </div>
        );
    }
}

export default Users;