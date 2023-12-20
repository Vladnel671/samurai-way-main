import React, {FC} from 'react';
import s from "./Users.module.css";
import {UserType} from "../../types";

type UsersPropsType = {
    users: UserType[]
    onFollow: (userID: number) => void
    onUnfollow: (userID: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

const Users: FC<UsersPropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={s.UsersBlock}>
                {props.users.map(u => (
                    <div className={s.userInfoBlock} key={u.id}>
                        <img src={u.photos.large ? u.photos.large : ''} className={s.userPhoto} alt="user-photo"/>
                        <span className={s.fullNameBlock}>{u.name}</span>
                        <span className={s.userStatus}>{u.status}</span>
                        <div className={s.locationBlock}>
                            <span>Country</span>, <span className={s.userCity}>City</span>
                        </div>
                        <div>
                            {u.followed ? (
                                <button className={s.followUnfollowBtn} onClick={() => props.onUnfollow(u.id)}>
                                    Unfollow
                                </button>
                            ) : (
                                <button className={s.followUnfollowBtn} onClick={() => props.onFollow(u.id)}>
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
                            props.onPageChanged(p)
                        }}
                        className={props.currentPage === p ? s.selectedPage : s.page}>{p}</span>
                })}
            </div>
        </div>
    );
};

export default Users;