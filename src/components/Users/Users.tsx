import React, {FC} from 'react';
import s from "./Users.module.css";
import {UserType} from "../../types";
import {NavLink} from "react-router-dom";

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

    let visiblePages = []
    if (props.currentPage > 3) {
        visiblePages.push(1, '...')
    }
    for (let i = Math.max(2, props.currentPage - 3); i <= Math.min(pagesCount - 1, props.currentPage + 3); i++) {
        visiblePages.push(i)
    }
    if (props.currentPage < pagesCount - 2) {
        visiblePages.push('...', pagesCount)
    }

    return (
        <div>
            <div className={s.UsersBlock}>
                {props.users.map(u => (
                    <div className={s.userInfoBlock} key={u.id}>
                        <NavLink className={s.userPhoto} to={'/profile/' + u.id}>
                            {u.photos.small && <img src={u.photos.small} alt="user-photo"/>}
                        </NavLink>
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
                {visiblePages.map((p, index) => {
                    return typeof p === 'number' ? (
                        <span
                            key={index}
                            onClick={() => {
                                props.onPageChanged(p)
                            }}
                            className={props.currentPage === p ? s.selectedPage : s.page}>{p}</span>
                    ) : (
                        <span key={index} style={{color: "white"}}>{p}</span>
                    )
                })}
            </div>
        </div>
    );
};

export default Users;