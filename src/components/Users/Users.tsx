import React, {FC} from 'react';
import {UserType} from "../../types";
import s from "./Users.module.css"

type UsersPropsType = {
    users: UserType[]
    onFollow: (userID: number) => void
    onUnfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
}

const Users: FC<UsersPropsType> = ({users, setUsers, onUnfollow, onFollow}) => {

    const unFollow = (userID: number) => {
        onUnfollow(userID)
    }
    const follow = (userID: number) => {
        onFollow(userID)
    }

    return (
        <div className={s.UsersBlock}>
            {users.map(u => <div className={s.userInfoBlock} key={u.id}>
                    <img className={s.userPhoto} src={u.userPhoto} alt="user-photo"/>
                    <span className={s.fullNameBlock}>
                         {u.fullName}
                    </span>
                    <span>{u.status}</span>
                    <div className={s.locationBlock}>
                        <span>{u.location.country}</span>, <span className={s.userCity}>{u.location.city}</span>
                    </div>
                    <div>
                        {u.followed ?
                            <button className={s.followUnfollowBtn} onClick={() => unFollow(u.id)}>Unfollow</button> :
                            <button className={s.followUnfollowBtn} onClick={() => follow(u.id)}>Follow</button>
                        }
                    </div>
                </div>
            )}
        </div>
    );
};

export default Users;