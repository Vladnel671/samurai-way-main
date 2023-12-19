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
            {users.map(u => <span>
                <div>
                    {u.followed ? <button onClick={() => unFollow(u.id)}>Unfollow</button> :
                        <button onClick={() => follow(u.id)}>Follow</button>}
                </div>
                <span>
                {u.fullName}
                </span>

            </span>)}
        </div>
    );
};

export default Users;