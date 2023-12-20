import {ActionsTypes, UsersPageType, UserType} from "../types";

const initialState: UsersPageType = {
    users: []
};

export const userReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case 'SET_USERS':
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
};

export const followAC = (userID: number) => {
    return {
        type: "FOLLOW",
        userID
    } as const;
};

export const unfollowAC = (userID: number) => {
    return {
        type: "UNFOLLOW",
        userID
    } as const;
};

export const setUsersAC = (users: UserType[]) => {
    return {
        type: "SET_USERS",
        users
    } as const;
}
