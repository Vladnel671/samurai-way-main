import React, {FC} from 'react';
import {UserType} from "../../types";

type UsersPropsType = {
    users: UserType[]
    onFollow: (userID: number) => void
    onUnfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
}

const Users: FC<UsersPropsType> = ({users, setUsers, onUnfollow, onFollow}) => {
    return (
        <div>
            {users.map(u => <span>
                <div>
                    <button>Follow</button>
                    <button>UnFollow</button>
                </div>
                <span>
                {u.fullName}
                </span>

            </span>)}
        </div>
    );
};

export default Users;