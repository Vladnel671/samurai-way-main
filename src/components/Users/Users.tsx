import axios from "axios";
import React from "react";
import s from "./Users.module.css";
import {UserType} from "../../types";

type UsersPropsType = {
    users: UserType[]
    onFollow: (userID: number) => void
    onUnfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
}

class Users extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            })
            .catch(error => {
                console.log(error);
            });
    }

    unFollow(userId: number) {
        this.props.onUnfollow(userId);
    }

    follow(userId: number) {
        this.props.onUnfollow(userId);
    }

    render() {
        return (
            <div className={s.UsersBlock}>
                {this.props.users.map(u => (
                    <div className={s.userInfoBlock} key={u.id}>
                        <img className={s.userPhoto} alt="user-photo"/>
                        <span className={s.fullNameBlock}>{u.name}</span>
                        <span>{u.status}</span>
                        <div className={s.locationBlock}>
                            <span>Country</span>, <span className={s.userCity}>City</span>
                        </div>
                        <div>
                            {u.followed ? (
                                <button className={s.followUnfollowBtn} onClick={() => this.unFollow(u.id)}>
                                    Unfollow
                                </button>
                            ) : (
                                <button className={s.followUnfollowBtn} onClick={() => this.follow(u.id)}>
                                    Follow
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Users;